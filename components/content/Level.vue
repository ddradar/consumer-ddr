<template>
  <div class="tags has-addons">
    <Series :slug="slug" tag="span" class="tag" />
    <span class="tag">{{ level }}</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  slug: string
  level: number | '10+' | '?'
}

defineProps<Props>()
</script>
