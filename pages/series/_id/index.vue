<template>
  <section v-if="info" class="section">
    <h1 class="title">{{ info.name }}</h1>
    <h2 class="subtitle">{{ info.platform }}({{ info.region }})</h2>
    <b-table :data="songs" striped narrowed mobile-cards>
      <template slot-scope="props">
        <b-table-column field="name" label="Name">
          <nuxt-link :to="`/song/${props.row.slug}/`">
            {{ props.row.name }}
          </nuxt-link>
        </b-table-column>
        <b-table-column field="artist" label="Artist">
          <span>{{ props.row.artist }}</span>
        </b-table-column>
        <b-table-column field="bpm" label="BPM">
          {{ props.row.bpm }}
        </b-table-column>
        <b-table-column
          v-for="grp in props.row.charts"
          :key="grp[0]"
          :label="grp[0]"
        >
          <b-taglist attached>
            <b-tag
              v-for="chart in grp[1]"
              :key="chart.difficulty"
              :type="chart.color"
            >
              <b-tooltip :label="chart.difficultyName">
                {{ chart.level }}
              </b-tooltip>
            </b-tag>
          </b-taglist>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

import { Software } from '~/types/software'
import { Chart, normalizeDifficulty, PlayStyle, Song } from '~/types/song'
import { groupBy } from '~/types/util'

type ChartInfo = Pick<Chart, 'level' | 'difficulty'> & {
  color: string
  difficultyName: string
}

type SongListData = Omit<Song, 'series' | 'charts'> & {
  charts: [PlayStyle, ChartInfo[]][]
}

@Component
export default class SeriesDetailPage extends Vue {
  info?: Software
  songs: SongListData[] = []

  async asyncData({ params, $content }: Pick<Context, 'params' | '$content'>) {
    const info: Software = await $content(params.id, params.id)
      .where({ extension: { $eq: '.md' } })
      .fetch()
    const rawSongs: Omit<Song, 'series'>[] = await $content(params.id)
      .where({ extension: { $eq: '.json' } })
      .without('series')
      .fetch()
    const songs: SongListData[] = rawSongs.map((s) => ({
      slug: s.slug,
      name: s.name,
      artist: s.artist,
      bpm: s.bpm,
      charts: groupBy(s.charts, (c) => c.playStyle).map((t) => [
        t[0],
        t[1].map((c) => {
          const difficultyName =
            info?.difficultyNames[c.difficulty] ?? 'Unknown'
          const color = `is-${normalizeDifficulty(
            difficultyName
          ).toLowerCase()}`
          return {
            level: c.level,
            difficulty: c.difficulty,
            difficultyName,
            color
          }
        })
      ])
    }))
    return {
      info,
      songs
    }
  }

  head(): MetaInfo {
    return {
      title: this.info?.name
    }
  }
}
</script>
