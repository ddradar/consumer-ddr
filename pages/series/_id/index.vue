<template>
  <section v-if="info" class="section">
    <h1 class="title">{{ info.name }}</h1>
    <h2 class="subtitle">{{ info.platform }}({{ info.region }})</h2>
    <OTable :data="songs" striped narrowed>
      <OTableColumn v-slot="props" field="name" label="Name">
        <NuxtLink :to="`/song/${props.row.slug}/`">
          {{ props.row.name }}
        </NuxtLink>
      </OTableColumn>
      <OTableColumn v-slot="props" field="artist" label="Artist">
        <span>{{ props.row.artist }}</span>
      </OTableColumn>
      <OTableColumn v-slot="props" field="bpm" label="BPM">
        {{ props.row.bpm }}
      </OTableColumn>
      <OTableColumn
        v-for="playStyle in playStyles"
        v-slot="props"
        :key="playStyle"
        :label="playStyle"
      >
        <div class="tags has-addons">
          <span
            v-for="chart in props.row.charts[playStyle]"
            :key="chart.difficulty"
            class="tag"
            :class="chart.color"
            :title="chart.difficultyName"
          >
            {{ chart.level }}
          </span>
        </div>
      </OTableColumn>

      <template #empty>
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </OTable>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

import { Software } from '~/types/software'
import { Chart, normalizeDifficulty, PlayStyle, Song } from '~/types/song'

type ChartInfo = Pick<Chart, 'level' | 'difficulty'> & {
  color: string
  difficultyName: string
}

type SongListData = Omit<Song, 'series' | 'charts'> & {
  charts: Partial<Record<PlayStyle, ChartInfo[]>>
}

@Component
export default class SeriesDetailPage extends Vue {
  info: Software | null = null
  songs: SongListData[] = []
  playStyles: PlayStyle[] = []

  async asyncData({ params, $content }: Pick<Context, 'params' | '$content'>) {
    const info = (await $content(params.id, params.id)
      .where({ extension: { $eq: '.md' } })
      .fetch<Software>()) as Software | null
    const rawSongs = [
      await $content(params.id)
        .where({ extension: { $eq: '.json' } })
        .without('series')
        .fetch<Omit<Song, 'series'>>()
    ].flat()

    const playStyles = [
      ...new Set(rawSongs.flatMap((s) => s.charts.map((c) => c.playStyle)))
    ]
    const songs: SongListData[] = rawSongs.map((s) => ({
      slug: s.slug,
      name: s.name,
      artist: s.artist,
      bpm: s.bpm,
      charts: s.charts.reduce((p, c) => {
        if (!p[c.playStyle]) {
          p[c.playStyle] = []
        }
        const difficultyName = info?.difficultyNames[c.difficulty] ?? 'Unknown'
        p[c.playStyle]!.push({
          level: c.level,
          difficulty: c.difficulty,
          difficultyName,
          color: `is-${normalizeDifficulty(difficultyName).toLowerCase()}`
        })
        return p
      }, {} as Partial<Record<PlayStyle, ChartInfo[]>>)
    }))
    return {
      info,
      songs,
      playStyles
    }
  }

  head(): MetaInfo {
    return {
      title: this.info?.name
    }
  }
}
</script>
