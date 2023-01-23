<template>
  <ul>
    <li v-for="slug in series" :key="slug">
      <NuxtLink :to="`/series/${slug}/`">{{ seriesList[slug].title }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import seriesList from '~~/content/series/.seriesList.json'
import type { Song } from '~~/src/content'

const NuxtLink = resolveComponent('NuxtLink')

interface SeriesListProps {
  series: Song['series']
}

defineProps<SeriesListProps>()
</script>
