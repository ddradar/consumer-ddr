<template>
  <section class="section">
    <h1 class="title">Song List</h1>

    <b-table :data="songList" per-page="20" striped narrowed paginated>
      <b-table-column v-slot="props" field="name" label="Name" searchable>
        <nuxt-link class="is-size-6-mobile" :to="`/song/${props.row.slug}/`">
          {{ props.row.name }}
        </nuxt-link>
      </b-table-column>
      <b-table-column v-slot="props" field="artist" label="Artist" searchable>
        <span class="is-size-6-mobile">{{ props.row.artist }}</span>
      </b-table-column>
      <b-table-column v-slot="props" field="bpm" label="BPM">
        {{ props.row.bpm }}
      </b-table-column>
      <b-table-column v-slot="props" label="Series">
        <div class="buttons">
          <b-button
            v-for="id in props.row.seriesList"
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

      <template #empty>
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

import { Song } from '~/types/song'

type SongListData = Omit<Song, 'series' | 'charts'> & {
  seriesList: string[]
}

@Component
export default class SeriesDetailPage extends Vue {
  songList: SongListData[] = []
  seriesList: string[] = []

  readonly head: MetaInfo = {
    title: 'Song List'
  }

  async asyncData({ $content }: Pick<Context, '$content'>) {
    const songs = await $content({ deep: true })
      .where({ extension: { $eq: '.json' } })
      .without('charts')
      .fetch<Omit<Song, 'charts'>>()
    const songList = [songs].flat().reduce((prev, current) => {
      if (!prev) {
        return [
          {
            slug: current.slug,
            name: current.name,
            artist: current.artist,
            bpm: current.bpm,
            seriesList: [current.series]
          }
        ]
      }
      if (!prev.some((s) => s.slug === current.slug)) {
        prev.push({
          slug: current.slug,
          name: current.name,
          artist: current.artist,
          bpm: current.bpm,
          seriesList: [current.series]
        })
      }
      return prev
    }, undefined as SongListData[] | undefined)

    const seriesList = (await $content({ deep: true })
      .where({ extension: { $eq: '.md' } })
      .sortBy('launched')
      .only('slug')
      .fetch<string>()) as string[]

    return { songList, seriesList }
  }

  getClass(id: string) {
    const index = this.seriesList!.findIndex((s) => s === id)
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
