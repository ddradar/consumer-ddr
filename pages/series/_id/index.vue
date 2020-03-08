<template>
  <section v-if="info" class="section">
    <h1 class="title">{{ info.name }}</h1>
    <h2 class="subtitle">{{ info.platform }}({{ info.region }})</h2>
    <b-table :data="info.songs" striped narrowed mobile-cards>
      <template slot-scope="props">
        <b-table-column field="name" label="Name">
          <span class="is-size-6-mobile">{{ props.row.name }}</span>
        </b-table-column>
        <b-table-column field="artist" label="Artist">
          <span class="is-size-6-mobile">{{ props.row.artist }}</span>
        </b-table-column>
        <b-table-column field="bpm" label="BPM">
          {{ props.row.bpm }}
        </b-table-column>
        <b-table-column v-for="row in chartRows" :key="row" :label="row">
          <span
            v-for="chart in props.row.charts.filter((c) => c.playStyle === row)"
            :key="chart.difficulty"
            class="tag"
            :class="type(chart.difficulty)"
          >
            <b-tooltip :label="tooltip(chart.difficulty)">
              {{ chart.level }}
            </b-tooltip>
          </span>
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

import { getSoftwareInfo, SoftwareInfo } from '~/plugins/software-repository'
import { PlayStyle } from '~/types/chart'

@Component
export default class SeriesDetailPage extends Vue {
  info: SoftwareInfo | undefined
  chartRows: PlayStyle[] = []

  asyncData({ params, payload }: Pick<Context, 'params' | 'payload'>) {
    const software = (payload || getSoftwareInfo(params.id)) as
      | SoftwareInfo
      | undefined
    return {
      info: software,
      chartRows: software
        ? [
            ...new Set(
              software.songs.flatMap((s) => s.charts.map((c) => c.playStyle))
            )
          ]
        : ['SINGLE', 'DOUBLE']
    }
  }

  type(difficulty: number) {
    return difficulty === 2
      ? 'is-danger'
      : difficulty === 3
      ? 'is-success'
      : 'is-warning'
  }

  tooltip(difficulty: number) {
    if (!this.info) return 'Unknown'
    return this.info.difficultyNames[difficulty] || 'Unknown'
  }
}
</script>
