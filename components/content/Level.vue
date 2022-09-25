<template>
  <OTooltip :label="software.title">
    <div class="tags has-addons">
      <Series :slug="slug" tag="span" class="tag" />
      <span class="tag">{{ level }}</span>
    </div>
  </OTooltip>
</template>

<script lang="ts" setup>
import useSoftwareData from '~~/composables/useSoftwareData'

interface LevelProps {
  slug: string
  level: number | '10+' | '?'
}

const props = defineProps<LevelProps>()
const { software } = await useSoftwareData(props.slug)
</script>
