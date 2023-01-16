<template>
  <NuxtLink :to="href" :external="external">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
export interface Props {
  href?: string
  blank?: boolean
}

const props = withDefaults(defineProps<Props>(), { href: '', blank: false })
const external = computed(() => props.href.startsWith('http'))
</script>
