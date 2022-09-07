<template>
  <section class="section">
    <h1 class="title">Song List</h1>

    <OTable
      :data="songs!"
      per-page="20"
      striped
      narrowed
      paginated
      :loading="isLoading"
    >
      <OTableColumn v-slot="props" field="name" label="Name" searchable>
        <NuxtLink class="is-size-6-mobile" :to="`/songs/${props.row.slug}/`">
          {{ props.row.name }}
        </NuxtLink>
      </OTableColumn>
      <OTableColumn v-slot="props" field="artist" label="Artist" searchable>
        <span class="is-size-6-mobile">{{ props.row.artist }}</span>
      </OTableColumn>
      <OTableColumn v-slot="props" field="bpm" label="BPM">
        {{ props.row.bpm }}
      </OTableColumn>
      <OTableColumn v-slot="props" label="Series">
        <div class="buttons">
          <SeriesComponent
            v-for="s in props.row.seriesList"
            :key="s.slug"
            :title="s.name"
            tag="NuxtLink"
            class="button is-small"
            :color="s.color"
            :to="`/series/${s.slug}/`"
          >
            {{ s.slug }}
          </SeriesComponent>
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

<script lang="ts" setup>
import SeriesComponent from '~~/components/SeriesComponent.vue'
import useSoftwareList, {
  SoftwareListData
} from '~~/composables/useSoftwareList'
import type { Song } from '~~/src/content'

type SongListData = Omit<Song, 'series' | 'charts'> & {
  seriesList: SoftwareListData[]
}

useHead({ title: 'Song List' })

const { softwareList: _series } = await useSoftwareList()
const { data: songs, pending: isLoading } = await useAsyncData(
  '/songs',
  () =>
    queryContent<Song>()
      .where({ _type: 'json' })
      .sort({ name: 1 })
      .only(['slug', 'series', 'name', 'artist', 'bpm'])
      .find(),
  {
    transform: (songs: Song[]) =>
      songs.reduce((prev, current) => {
        const song = prev.find((s) => s.slug === current.slug)
        if (song) {
          song.seriesList.push(
            _series.value.find((d) => d.slug === current.series)!
          )
        } else {
          prev.push({
            slug: current.slug,
            name: current.name,
            artist: current.artist,
            bpm: current.bpm,
            seriesList: [_series.value.find((d) => d.slug === current.series)!]
          })
        }
        return prev
      }, [] as SongListData[])
  }
)
</script>
