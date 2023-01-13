<template>
  <ul>
    <li v-for="v in series" :key="v.slug">
      <NuxtLink :to="`/series/${v.slug}/`">{{ v.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Software } from '~~/src/content'

type SeriesListData = Pick<Software, 'slug' | 'title'>

const NuxtLink = resolveComponent('NuxtLink')

interface SeriesListProps {
  series: SeriesListData[]
}

const _prop = defineProps<SeriesListProps>()
</script>
