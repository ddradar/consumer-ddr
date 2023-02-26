<template>
  <ul>
    <li v-for="slug in series" :key="slug">
      <NuxtLink :to="getLinks(slug)">{{ seriesList[slug].title }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Song } from '~~/composables/useSongData'
import seriesList from '~~/content/series/.seriesList.json'

interface SeriesListProps {
  series: Song['series']
}

defineProps<SeriesListProps>()

const getLinks = (slug: keyof typeof seriesList) =>
  (seriesList[slug] as { redirect?: string }).redirect ?? `/series/${slug}`
</script>
