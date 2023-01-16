<template>
  <ul>
    <li v-for="v in series" :key="v.slug">
      <NuxtLink :to="`/series/${v.slug}/`">{{ v.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Song } from '~~/src/content'

const NuxtLink = resolveComponent('NuxtLink')

interface SeriesListProps {
  series: Song['series']
}

defineProps<SeriesListProps>()
</script>
