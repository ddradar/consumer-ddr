<template>
  <NuxtLink v-for="(l, i) in slugs" :key="l" :to="l">
    <Badge>{{ levels[i] ?? levels[0] }}</Badge>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface LevelProps {
  links: string
  level: string
}

const _props = defineProps<LevelProps>()
const slugs = _props.links.split(',')
const levels = _props.level.split(',')
</script>
