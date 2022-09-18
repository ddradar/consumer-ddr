<template>
  <div class="tags has-addons" style="display: inline-block; margin: 0px">
    <span
      v-for="(level, i) in splitedLevels"
      :key="i"
      class="tag"
      :class="software.difficulties[splitedDificulties[i]].class"
      :title="software.difficulties[splitedDificulties[i]].name"
    >
      {{ level }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import useSoftwareData from '~~/composables/useSoftwareData'

interface Props {
  slug: string
  levels: string
  difficulties: string
}

const _prop = defineProps<Props>()
const splitedLevels = computed(() => _prop.levels.split(','))
const splitedDificulties = computed(() =>
  _prop.difficulties.split(',').map((s) => parseInt(s, 10))
)

const { software } = await useSoftwareData(_prop.slug)
</script>
