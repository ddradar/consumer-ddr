<template>
  <NuxtLink :href="href">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
export interface Props {
  href?: string
  blank?: boolean
}

withDefaults(defineProps<Props>(), { href: '', blank: false })
</script>
