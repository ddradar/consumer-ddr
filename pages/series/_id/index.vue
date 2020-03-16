<template>
  <section v-if="info" class="section">
    <h1 class="title">{{ info.name }}</h1>
    <h2 class="subtitle">{{ info.platform }}({{ info.region }})</h2>
    <b-table :data="info.songs" striped narrowed mobile-cards>
      <template slot-scope="props">
        <b-table-column field="name" label="Name">
          <nuxt-link :to="`/song/${props.row.id}/`">
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

import { getSoftwareInfo } from '~/plugins/software-repository'
import { PlayStyle } from '~/types/chart'

type SoftwareInfo = ReturnType<typeof getSoftwareInfo>

@Component
export default class SeriesDetailPage extends Vue {
  info: SoftwareInfo
  chartRows: PlayStyle[] = []

  asyncData({ params, payload }: Pick<Context, 'params' | 'payload'>) {
    const software = (payload || getSoftwareInfo(params.id)) as SoftwareInfo
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
    const name = difficultyName.toUpperCase()
    return ['BASIC', 'NORMAL', 'LIGHT'].includes(name)
      ? 'is-basic'
      : ['ANOTHER', 'DIFFICULT', 'TRICK'].includes(name)
      ? 'is-difficult'
      : ['MANIAC', 'SSR', 'EXPERT'].includes(name)
      ? 'is-expert'
      : ['BEGINNER'].includes(name)
      ? 'is-beginner'
      : 'is-challenge'
  }
}
</script>
