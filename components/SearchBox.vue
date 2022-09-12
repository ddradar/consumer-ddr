<template>
  <section>
    <OLoading :active="isLoading" />
    <OAutocomplete
      v-model="term"
      icon="magnify"
      placeholder="曲名 or アーティスト名"
      clearable
      :data="songs"
      :loading="isLoading"
      @select="onSelected"
    >
      <template #default="props">
        <span>{{ props.option.name }} / {{ props.option.artist }}</span>
      </template>
    </OAutocomplete>
  </section>
</template>

<script lang="ts" setup>
import type { Song } from '~~/src/content'

const keys = ['slug', 'name', 'artist'] as const
type SearchSongResult = Pick<Song, typeof keys[number]>

const term = ref('')

const { data: _songs, pending: isLoading } = await useLazyAsyncData(
  '/search-box',
  () =>
    queryContent<Song>()
      .where({ _type: 'json' })
      .only([...keys])
      .find(),
  {
    transform: (songs) =>
      songs.reduce((prev, s) => {
        if (!prev.find((d) => d.slug === s.slug)) prev.push(s)
        return prev
      }, [] as SearchSongResult[])
  }
)
const songs = computed(() =>
  term.value
    ? _songs.value?.filter(
        (d) =>
          d.name.toUpperCase().includes(term.value.toUpperCase()) ||
          d.artist.toUpperCase().includes(term.value.toUpperCase())
      )
    : []
)

const router = useRouter()
const onSelected = (song: SearchSongResult) => {
  term.value = song.name
  router.push(`/songs/${song.slug}`)
}
</script>
