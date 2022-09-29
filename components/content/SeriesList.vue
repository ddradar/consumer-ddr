<template>
  <ul>
    <li v-for="series in seriesList" :key="series.to">
      <NuxtLink :to="series.to">{{ series.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import useSoftwareList from '~~/composables/useSoftwareList'

const NuxtLink = resolveComponent('NuxtLink')

interface SeriesListProps {
  series: string[]
}

const prop = defineProps<SeriesListProps>()
const { softwareList: _seriesList } = await useSoftwareList()

const seriesList = computed(() =>
  prop.series.map((s) => {
    const series = _seriesList.value.find((d) => d.slug === s)
    return {
      title: `${series?.title}${
        series?.region === 'None' ? '' : ` (${series?.region})`
      }`,
      to: `/series/${s}/`
    }
  })
)
</script>
