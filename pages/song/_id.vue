<template>
  <section v-if="info" class="section">
    <h1 class="title">{{ info.name }} / {{ info.artist }}</h1>
    <h2 class="subtitle">BPM {{ info.bpm }}</h2>
    <div class="buttons">
      <b-button
        v-for="id in info.softwareIds"
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
          {{ props.row.level.join(', ') }}
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

import { getSongInfo } from '~/plugins/song-repository'

type SongInfo = ReturnType<typeof getSongInfo>

@Component
export default class SongDetailPage extends Vue {
  info: SongInfo

  asyncData({ params, payload }: Pick<Context, 'params' | 'payload'>) {
    const song = (payload || getSongInfo(params.id)) as SongInfo
    return {
      info: song
    }
  }

  head(): MetaInfo {
    return {
      title: this.info?.name
    }
  }

  getClass(id: string) {
    const index = this.info!.softwareIds.findIndex((s) => s === id)
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
