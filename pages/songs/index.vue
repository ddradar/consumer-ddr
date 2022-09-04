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
          <OButton
            v-for="id in props.row.seriesList"
            :key="id"
            tag="NuxtLink"
            size="small"
            :variant="getClass(id)"
            :to="`/series/${id}/`"
          >
            {{ id }}
          </OButton>
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
import type { SoftwareParsedContent, SongParsedContent } from '~~/src/content'

type SongListData = Omit<SongParsedContent, 'series' | 'charts'> & {
  seriesList: string[]
}

const { data: _series } = await useAsyncData('/series', () =>
  queryContent<SoftwareParsedContent>()
    .where({ _type: 'markdown' })
    .sort({ launched: 1 })
    .only('slug')
    .find()
)
const { data: songs, pending: isLoading } = await useAsyncData(
  '/songs',
  () =>
    queryContent<SongParsedContent>()
      .where({ _type: 'json' })
      .sort({ name: 1 })
      .without('charts')
      .find(),
  {
    transform: (songs: SongParsedContent[]) =>
      songs.reduce((prev, current) => {
        const song = prev.find((s) => s.slug === current.slug)
        if (song) {
          song.seriesList.push(current.series)
        } else {
          prev.push({
            slug: current.slug,
            name: current.name,
            artist: current.artist,
            bpm: current.bpm,
            seriesList: [current.series]
          })
        }
        return prev
      }, [] as SongListData[])
  }
)

const getClass = (id: string) => {
  const index = _series.value!.findIndex((s) => s.slug === id)
  const classList = ['info', 'success', 'danger', 'warning', 'dark']
  return classList[index % classList.length]
}
</script>
