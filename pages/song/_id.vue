<template>
  <section v-if="info" class="section">
    <h1 class="title">{{ info.name }} / {{ info.artist }}</h1>
    <h2 class="subtitle">BPM {{ info.bpm }}</h2>
    <div class="buttons">
      <b-button
        v-for="id in info.seriesList"
        :key="id"
        tag="nuxt-link"
        size="is-small"
        :class="getClass(id)"
        :to="`/series/${id}/`"
      >
        {{ id }}
      </b-button>
    </div>
    <b-table :data="info.charts" striped mobile-cards>
      <template slot-scope="props">
        <b-table-column field="playStyle" label="PlayStyle">
          {{ props.row.playStyle }}
        </b-table-column>
        <b-table-column field="difficulty" label="Difficulty">
          {{ props.row.difficulty }}
        </b-table-column>
        <b-table-column field="level" label="Level">
          {{ Object.values(props.row.levels).join(', ') }}
        </b-table-column>
      </template>
    </b-table>
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
  info?: SongInfo

  async asyncData({ params, $content }: Pick<Context, 'params' | '$content'>) {
    const songs: Song[] = await $content({ deep: true })
      .where({ slug: params.id })
      .fetch()
    const info = songs.reduce((prev, current) => {
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
          })
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
    const classList = [
      'is-info',
      'is-success',
      'is-danger',
      'is-warning',
      'is-dark'
    ]
    return classList[index % classList.length]
  }
}
</script>
