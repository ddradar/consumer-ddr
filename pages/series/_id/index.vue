<template>
  <section v-if="info" class="section">
    <h1 class="title">{{ info.name }}</h1>
    <h2 class="subtitle">{{ info.region }} / {{ info.platform }}</h2>
    <b-table
      :data="info.songs"
      striped
      hoverable
      :loading="loading"
      focusable
      :mobile-cards="false"
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Name">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column field="artist" label="Artist">
          {{ props.row.artist }}
        </b-table-column>
        <b-table-column field="bpm" label="BPM">
          {{ props.row.bpm }}
        </b-table-column>
        <b-table-column v-for="row in chartRows" :key="row" :label="row">
          <div class="tags">
            <span
              v-for="chart in props.row.charts.filter(
                (c) => c.playStyle === row
              )"
              :key="chart.difficulty"
              class="tag"
              :class="type(chart.difficulty)"
            >
              <b-tooltip :label="tooltip(chart.difficulty)">
                {{ chart.level }}
              </b-tooltip>
            </span>
          </div>
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
  chartRows: PlayStyle[] = ['SINGLE', 'DOUBLE', 'COUPLE']

  asyncData({ params, payload }: Pick<Context, 'params' | 'payload'>) {
    return {
      info: (payload || getSoftwareInfo(params.id)) as SoftwareInfo | undefined
    }
  }

  type(value: number) {
    return value === 2 ? 'is-danger' : value === 3 ? 'is-success' : 'is-warning'
  }

  tooltip(value: number) {
    return value === 1
      ? 'BASIC'
      : value === 2
      ? 'ANOTHER'
      : value === 3
      ? 'MANIAC'
      : value === 5
      ? 'NORMAL'
      : 'Unknown'
  }
}
</script>
