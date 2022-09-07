<template>
  <section v-if="song" class="section">
    <h1 class="title">{{ song.name }} / {{ song.artist }}</h1>
    <span class="subtitle">BPM {{ song.bpm }}</span>

    <section class="content">
      <ul>
        <li v-for="s in series" :key="s.slug">
          <NuxtLink :to="`/series/${s.slug}`">{{ s.title }}</NuxtLink>
        </li>
      </ul>
    </section>

    <OTable :data="song.charts" striped>
      <OTableColumn v-slot="props" field="playStyle" label="PlayStyle">
        {{ props.row.playStyle }}
      </OTableColumn>
      <OTableColumn v-slot="props" field="difficulty" label="Difficulty">
        {{ props.row.difficulty }}
      </OTableColumn>
      <OTableColumn v-slot="props" field="level" label="Level">
        <div class="field is-grouped is-grouped-multiline">
          <div
            v-for="(s, i) in (props.row.seriesList as ChartInfo['seriesList'])"
            :key="i"
            class="control"
          >
            <OTooltip :label="s.title">
              <div class="tags has-addons">
                <SeriesComponent tag="span" :color="s.color" class="tag">
                  {{ s.slug }}
                </SeriesComponent>
                <span class="tag">{{ s.level }}</span>
              </div>
            </OTooltip>
          </div>
        </div>
      </OTableColumn>
    </OTable>
  </section>
</template>

<script lang="ts" setup>
import SeriesComponent from '~~/components/SeriesComponent.vue'
import useSoftwareList, {
  SoftwareListData
} from '~~/composables/useSoftwareList'
import type { Chart, Song } from '~~/src/content'

type ChartInfo = Omit<Chart, 'level'> & {
  seriesList: (Pick<SoftwareListData, 'slug' | 'title' | 'color'> &
    Pick<Chart, 'level'>)[]
}

const _route = useRoute()
const _id = _route.params.id as string

const { softwareList } = await useSoftwareList()
const { data: song } = await useAsyncData(
  `/songs/${_id}`,
  () =>
    queryContent<Song>()
      .where({ slug: { $eq: _id } })
      .only(['series', 'name', 'artist', 'bpm', 'charts'])
      .find(),
  {
    transform: (songs: Song[]) => ({
      name: songs[0].name,
      artist: songs[0].artist,
      bpm: songs[0].bpm,
      series: songs.map((s) => s.series),
      charts: songs.reduce((prev, current) => {
        for (const chart of current.charts) {
          const series = softwareList.value.find(
            (d) => d.slug === current.series
          )!
          const existsChart = prev.find(
            (c) =>
              c.playStyle === chart.playStyle &&
              c.difficulty === chart.difficulty
          )
          if (existsChart) {
            existsChart.seriesList.push({
              slug: series.slug,
              title: series.title,
              color: series.color,
              level: chart.level
            })
          } else {
            prev.push({
              playStyle: chart.playStyle,
              difficulty: chart.difficulty,
              seriesList: [
                {
                  slug: series.slug,
                  title: series.title,
                  color: series.color,
                  level: chart.level
                }
              ]
            })
          }
        }
        return prev
      }, [] as ChartInfo[])
    })
  }
)

useHead({ title: song.value?.name })

const series = computed(() =>
  song.value!.series.map((s) => softwareList.value.find((d) => d.slug === s)!)
)
</script>
