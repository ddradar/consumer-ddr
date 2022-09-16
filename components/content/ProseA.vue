<template>
  <NuxtLink v-if="isRelativeLink" :to="href">
    <slot />
  </NuxtLink>
  <a v-else :href="href"><slot /></a>
</template>

<script setup lang="ts">
export interface Props {
  href?: string
  blank?: boolean
}

const props = withDefaults(defineProps<Props>(), { href: '', blank: false })
const isRelativeLink = computed(() => !props.href.startsWith('http'))
</script>
