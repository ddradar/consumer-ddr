<template>
  <section class="section">
    <h1 class="title">Song List</h1>
    <b-table
      :data="songList"
      per-page="20"
      striped
      narrowed
      paginated
      mobile-cards
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Name" searchable>
          <nuxt-link class="is-size-6-mobile" :to="`/song/${props.row.id}/`">
            {{ props.row.name }}
          </nuxt-link>
        </b-table-column>
        <b-table-column field="artist" label="Artist" searchable>
          <span class="is-size-6-mobile">{{ props.row.artist }}</span>
        </b-table-column>
        <b-table-column field="bpm" label="BPM">
          {{ props.row.bpm }}
        </b-table-column>
        <b-table-column label="Series">
          <div class="buttons">
            <b-button
              v-for="id in props.row.softwareIds"
              :key="id"
              tag="nuxt-link"
              size="is-small"
              :class="getClass(id)"
              :to="`/series/${id}/`"
            >
              {{ id }}
            </b-button>
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
import { MetaInfo } from 'vue-meta'
import { Component, Vue } from 'vue-property-decorator'

import { getSoftwareList } from '~/plugins/software-repository'
import { getSongList } from '~/plugins/song-repository'

@Component
export default class SeriesDetailPage extends Vue {
  songList = getSongList()
  softwareIds = getSoftwareList().map((s) => s.id)

  head(): MetaInfo {
    return {
      title: 'Song List'
    }
  }

  getClass(id: string) {
    const index = this.softwareIds.findIndex((s) => s === id)
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
