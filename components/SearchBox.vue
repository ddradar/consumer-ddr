<template>
  <section>
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
import type { SongParsedContent } from '~~/src/content'

type SearchSongResult = Pick<SongParsedContent, 'slug' | 'name' | 'artist'>

const term = ref('')

const { data: _songs, pending: isLoading } = await useLazyAsyncData(
  () =>
    queryContent<SongParsedContent>()
      .where({ _type: 'json' })
      .only(['slug', 'name', 'artist'])
      .find(),
  {
    transform: (songs: SearchSongResult[]) =>
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
