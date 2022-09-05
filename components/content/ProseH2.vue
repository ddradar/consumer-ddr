<template>
  <h2 :id="id" class="title is-4">
    <slot />
    <NuxtLink :href="`#${id}`">
      <OIcon icon="link-variant" />
    </NuxtLink>
  </h2>
</template>

<script lang="ts" setup>
defineProps<{ id: string }>()
</script>
