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
        <b-table-column v-for="row in chartRows" :key="row" :label="row">
          <b-taglist attached>
            <b-tag
              v-for="chart in props.row.charts.filter(
                (c) => c.playStyle === row
              )"
              :key="chart.difficulty"
              :type="type(tooltip(chart.difficulty))"
            >
              <b-tooltip :label="tooltip(chart.difficulty)">
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
import { normalizeDifficulty, PlayStyle, Song } from '~/types/song'

@Component
export default class SeriesDetailPage extends Vue {
  info?: Software
  songs: Song[] = []
  chartRows: PlayStyle[] = []

  async asyncData({ params, $content }: Pick<Context, 'params' | '$content'>) {
    const info: Software = await $content(params.id, params.id)
      .where({ extension: { $eq: '.md' } })
      .fetch()
    const songs: Song[] = await $content(params.id)
      .where({ extension: { $eq: '.json' } })
      .fetch()
    const chartRows = [
      ...new Set(songs.flatMap((s) => s.charts.map((c) => c.playStyle)))
    ]
    return {
      info,
      songs,
      chartRows
    }
  }

  head(): MetaInfo {
    return {
      title: this.info?.name
    }
  }

  tooltip(difficulty: number) {
    if (!this.info) return 'Unknown'
    return this.info.difficultyNames[difficulty] || 'Unknown'
  }

  type(difficultyName: string) {
    return `is-${normalizeDifficulty(difficultyName).toLowerCase()}`
  }
}
</script>
