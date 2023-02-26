<template>
  <div class="control">
    <div class="tags has-addons">
      <NuxtLink
        :to="link"
        class="tag"
        :style="{
          backgroundColor: series.backgroundColor,
          color: series.color,
        }"
      >
        <span :title="series.title">{{ slug }}</span>
      </NuxtLink>
      <span class="tag">{{ level }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import seriesList from '~~/content/series/.seriesList.json'

interface LevelProps {
  slug: keyof typeof seriesList
  level: number | '10+' | '?'
}

const props = defineProps<LevelProps>()
const series = seriesList[props.slug]
const link =
  (series as { redirect?: string }).redirect ?? `/series/${props.slug}`
</script>
