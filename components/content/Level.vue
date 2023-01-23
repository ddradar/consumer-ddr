<template>
  <div class="tags has-addons">
    <NuxtLink
      :to="`/series/${slug}/`"
      class="tag"
      :style="{
        backgroundColor: seriesList[slug].backgroundColor,
        color: seriesList[slug].color
      }"
    >
      <span :title="series.title">{{ slug }}</span>
    </NuxtLink>
    <span class="tag">{{ level }}</span>
  </div>
</template>

<script lang="ts" setup>
import seriesList from '~~/content/series/.seriesList.json'

const NuxtLink = resolveComponent('NuxtLink')

interface LevelProps {
  slug: keyof typeof seriesList
  level: number | '10+' | '?'
}

const props = defineProps<LevelProps>()
const series = seriesList[props.slug]
</script>
