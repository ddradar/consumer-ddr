<template>
  <h2 :id="id" class="title is-4">
    <slot />
    <a :href="`#${id}`">
      <OIcon icon="link-variant" />
    </a>
  </h2>
</template>

<script lang="ts" setup>
defineProps<{ id: string }>()
</script>
