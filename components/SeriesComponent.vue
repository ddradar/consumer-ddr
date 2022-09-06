<template>
  <Component :is="tag === 'NuxtLink' ? NuxtLink : tag" class="is-series">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
const NuxtLink = resolveComponent('NuxtLink')

interface SeriesButtonProps {
  tag: string
  color?: string
}

withDefaults(defineProps<SeriesButtonProps>(), { color: '#3e8ed0' })
</script>

<style lang="scss" scoped>
.is-series {
  background-color: v-bind('color');
  color: #fff;
}
</style>
