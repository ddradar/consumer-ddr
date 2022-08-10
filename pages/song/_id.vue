<template>
  <section v-if="info" class="section">
    <h1 class="title">{{ info.name }} / {{ info.artist }}</h1>
    <h2 class="subtitle">BPM {{ info.bpm }}</h2>
    <div class="buttons">
      <OButton
        v-for="id in info.seriesList"
        :key="id"
        tag="NuxtLink"
        size="small"
        :variant="getClass(id)"
        :to="`/series/${id}/`"
      >
        {{ id }}
      </OButton>
    </div>
    <OTable :data="info.charts" striped>
      <OTableColumn v-slot="props" field="playStyle" label="PlayStyle">
        {{ props.row.playStyle }}
      </OTableColumn>
      <OTableColumn v-slot="props" field="difficulty" label="Difficulty">
        {{ props.row.difficulty }}
      </OTableColumn>
      <OTableColumn v-slot="props" field="level" label="Level">
        {{ Object.values(props.row.levels).join(', ') }}
      </OTableColumn>
    </OTable>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

import { Chart, Song } from '~/types/song'

type ComplexChart = Omit<Chart, 'level'> & {
  levels: { [key in string]: number | '10+' | '?' }
}

type SongInfo = Omit<Song, 'series' | 'charts'> & {
  charts: ComplexChart[]
  seriesList: string[]
}

@Component
export default class SongDetailPage extends Vue {
  info: SongInfo | null = null

  async asyncData({ params, $content }: Pick<Context, 'params' | '$content'>) {
    const songs = await $content({ deep: true })
      .where({ slug: params.id })
      .fetch<Song>()
    const info = [songs].flat().reduce((prev, current) => {
      if (!prev) {
        return {
          name: current.name,
          artist: current.artist,
          bpm: current.bpm,
          charts: current.charts.map<ComplexChart>((c) => {
            const levels: { [key in string]: number | '10+' | '?' } = {}
            levels[current.series] = c.level
            return {
              playStyle: c.playStyle,
              difficulty: c.difficulty,
              levels
            }
          }),
          seriesList: []
        } as SongInfo
      }
      prev.seriesList.push(current.series)
      for (const chart of current.charts) {
        const existsChart = prev.charts.find(
          (c) =>
            c.playStyle === chart.playStyle && c.difficulty === chart.difficulty
        )
        if (existsChart) {
          existsChart.levels[current.series] = chart.level
        } else {
          const levels: { [key in string]: number | '10+' | '?' } = {}
          levels[current.series] = chart.level
          prev.charts.push({
            playStyle: chart.playStyle,
            difficulty: chart.difficulty,
            levels
          })
        }
      }
      return prev
    }, undefined as SongInfo | undefined)
    return { info }
  }

  head(): MetaInfo {
    return {
      title: this.info?.name
    }
  }

  getClass(id: string) {
    const index = this.info!.seriesList.findIndex((s) => s === id)
    const classList = ['info', 'success', 'danger', 'warning', 'dark']
    return classList[index % classList.length]
  }
}
</script>
