<template>
  <section v-if="song" class="section">
    <Head>
      <Title>{{ song.name }} / {{ song.artist }}</Title>
    </Head>
    <h1 class="title">{{ song.name }} / {{ song.artist }}</h1>
    <h2 class="subtitle">BPM {{ song.bpm }}</h2>
    <div class="buttons">
      <NuxtLink
        v-for="id in song.series"
        :key="id"
        class="button"
        :class="getClass(id)"
        :to="`/series/${id}/`"
      >
        {{ id }}
      </NuxtLink>
    </div>
    <OTable :data="song.charts" striped>
      <OTableColumn v-slot="props" field="playStyle" label="PlayStyle">
        {{ props.row.playStyle }}
      </OTableColumn>
      <OTableColumn v-slot="props" field="difficulty" label="Difficulty">
        {{ props.row.difficulty }}
      </OTableColumn>
      <OTableColumn v-slot="props" field="level" label="Level">
        {{ Object.values(props.row.levels).join(', ') }}
      </OTableColumn>
    </OTable>
  </section>
</template>

<script lang="ts" setup>
import type { Chart, SongParsedContent } from '~~/src/content'

type ComplexChart = Omit<Chart, 'level'> & {
  levels: { [key in string]: Chart['level'] }
}

const _route = useRoute()
const _id = _route.params.id as string

const { data: song } = await useAsyncData(
  `/songs/${_id}`,
  () =>
    queryContent<SongParsedContent>()
      .where({ slug: { $eq: _id } })
      .only(['series', 'name', 'artist', 'bpm', 'charts'])
      .find(),
  {
    transform: (songs: SongParsedContent[]) => ({
      name: songs[0].name,
      artist: songs[0].artist,
      bpm: songs[0].bpm,
      series: songs.map((s) => s.series),
      charts: songs.reduce((prev, current) => {
        for (const chart of current.charts) {
          const existsChart = prev.find(
            (c) =>
              c.playStyle === chart.playStyle &&
              c.difficulty === chart.difficulty
          )
          if (existsChart) {
            existsChart.levels[current.series] = chart.level
          } else {
            const levels: ComplexChart['levels'] = {}
            levels[current.series] = chart.level
            prev.push({
              playStyle: chart.playStyle,
              difficulty: chart.difficulty,
              levels
            })
          }
        }
        return prev
      }, [] as ComplexChart[])
    })
  }
)

const getClass = (id: string) => {
  const index = song.value!.series.findIndex((s) => s === id)
  const classList = ['info', 'success', 'danger', 'warning', 'dark']
  return `is-${classList[index % classList.length]}`
}
</script>
