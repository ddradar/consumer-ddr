<template>
  <section>
    <OAutocomplete
      v-model="term"
      icon="magnify"
      placeholder="曲名 or アーティスト名"
      clearable
      :data="filtered"
      @select="onSelected"
    >
      <template #default="props">
        <span>{{ props.option.name }} / {{ props.option.artist }}</span>
      </template>
    </OAutocomplete>
  </section>
</template>

<script lang="ts" setup>
import useSongList from '~~/composables/useSongList'

const term = ref('')

const { songs } = await useSongList('/searchbox', 'slug', 'name', 'artist')
const filtered = computed(() =>
  term.value
    ? songs.value.filter(
        (s) =>
          s.name.toLowerCase().includes(term.value.toLowerCase()) ||
          s.artist.toLowerCase().includes(term.value.toLowerCase())
      )
    : songs.value
)

const router = useRouter()
const onSelected = (song: (typeof songs)['value'][number]) => {
  term.value = song.name
  router.push(`/songs/${song.slug}`)
}
</script>
