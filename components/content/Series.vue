<template>
  <Component
    :is="tag === 'NuxtLink' ? NuxtLink : tag"
    :style="{ backgroundColor, color: '#fff' }"
  >
    <span :title="software.title">{{ slug }}</span>
  </Component>
</template>

<script lang="ts" setup>
import useSoftwareData from '~~/composables/useSoftwareData'

const NuxtLink = resolveComponent('NuxtLink')

interface SeriesButtonProps {
  slug: string
  tag: string
}

const prop = defineProps<SeriesButtonProps>()
const { software } = await useSoftwareData(prop.slug)
const backgroundColor = computed(() => software.value.color ?? '#3e8ed0')
</script>
