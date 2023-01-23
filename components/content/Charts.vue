<template>
  <div class="tags has-addons">
    <span
      v-for="(level, i) in splitedLevels"
      :key="i"
      class="tag"
      :class="difficulties[splitedCharts[i]].class"
      :title="difficulties[splitedCharts[i]].name"
    >
      {{ level }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { Software } from '~~/src/content'

interface Props {
  difficulties: Software['difficulties']
  levels: string
  charts: string
}

const _prop = defineProps<Props>()
const splitedLevels = computed(() => _prop.levels.split(','))
const splitedCharts = computed(() =>
  _prop.charts.split(',').map((s) => parseInt(s, 10))
)
</script>
