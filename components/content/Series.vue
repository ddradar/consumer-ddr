<template>
  <Component
    :is="tag === 'NuxtLink' ? NuxtLink : tag"
    :style="{ backgroundColor, color: '#fff' }"
  >
    <span>{{ slug }}</span>
  </Component>
</template>

<script lang="ts" setup>
const NuxtLink = resolveComponent('NuxtLink')
const colors = {
  '1st-jp': 'darkviolet',
  '2nd-dc': 'darkorange',
  '2nd': 'mediumblue',
  '3rd': 'crimson',
  '4th': 'midnightblue',
  '5th': 'orange',
  best: 'goldenrod',
  'club-1': 'deepskyblue',
  'club-2': 'fuchsia',
  'club-dc': 'royalblue',
  dct: 'mediumvioletred',
  'disney-jp': 'dimgray',
  'disney-us': 'gold',
  'ext-jp': 'green',
  'ext-us': 'seagreen',
  ext2: 'seagreen',
  extra: 'deeppink',
  festival: 'seagreen',
  'gb-disney': 'orchid',
  gb: 'tomato',
  gb2: 'darkgreen',
  gb3: 'goldenrod',
  konamix: 'orange',
  'max-jp': 'blue',
  'max-us': 'darkorchid',
  'max2-jp': 'black',
  'max2-us': 'orange',
  'oha-gb': 'darkgray',
  oha: 'dodgerblue',
  party: 'hotpink',
  strike: 'dodgerblue',
  tkd: 'midnightblue',
  us: 'mediumvioletred',
}

interface SeriesButtonProps {
  slug: string
  tag: string
}

const prop = defineProps<SeriesButtonProps>()
const backgroundColor = colors[prop.slug] ?? '#3e8ed0'
</script>
