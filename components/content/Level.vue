<template>
  <div class="tags has-addons">
    <NuxtLink
      :to="`/series/${series.slug}/`"
      class="tag"
      :style="{ backgroundColor: series.color, color: '#fff' }"
    >
      <span :title="series.title">{{ series.slug }}</span>
    </NuxtLink>
    <span class="tag">{{ level }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { Song } from '~~/src/content'

const NuxtLink = resolveComponent('NuxtLink')

interface LevelProps {
  series: Song['series'][string]
  level: number | '10+' | '?'
}

const props = defineProps<LevelProps>()
</script>
