<template>
  <h3 :id="id" class="title is-5">
    <slot />
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>
