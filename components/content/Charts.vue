<template>
  <Badge
    v-for="(level, i) in splitedLevels"
    :key="i"
    :title="difficulties[splitedCharts[i]].name"
    :type="difficulties[splitedCharts[i]].type"
  >
    {{ level }}
  </Badge>
</template>

<script lang="ts" setup>
interface Props {
  difficulties: { name: string; type: string }[]
  levels: string
  charts: string
}

const _prop = defineProps<Props>()
const splitedLevels = computed(() => _prop.levels.split(','))
const splitedCharts = computed(() =>
  _prop.charts.split(',').map(s => parseInt(s, 10))
)
</script>
