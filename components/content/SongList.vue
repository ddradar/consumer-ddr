<template>
  <OTable :data="songs!" striped narrowed :loading="isLoading">
    <OTableColumn v-slot="props" field="name" label="Name">
      <NuxtLink :to="`/songs/${props.row.slug}/`">
        {{ props.row.name }}
      </NuxtLink>
    </OTableColumn>
    <OTableColumn v-slot="props" field="artist" label="Artist">
      <span>{{ props.row.artist }}</span>
    </OTableColumn>
    <OTableColumn v-slot="props" field="bpm" label="BPM">
      {{ props.row.bpm }}
    </OTableColumn>
    <OTableColumn
      v-for="playStyle in playStyles"
      v-slot="props"
      :key="playStyle"
      :label="playStyle"
    >
      <div class="tags has-addons">
        <span
          v-for="chart in props.row.charts[playStyle]"
          :key="chart.difficulty"
          class="tag"
          :class="chart.color"
          :title="chart.name"
        >
          {{ chart.level }}
        </span>
      </div>
    </OTableColumn>

    <template #empty>
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>Nothing here.</p>
        </div>
      </section>
    </template>
  </OTable>
</template>

<script lang="ts" setup>
import type {
  Chart,
  PlayStyle,
  SoftwareParsedContent,
  SongParsedContent
} from '~~/src/content'
import { normalizeDifficulty } from '~~/src/song'

type ChartInfo = Pick<Chart, 'level' | 'difficulty'> & {
  color: string
  name: string
}
interface Props {
  series: string
}

const prop = defineProps<Props>()

const { data: software } = await useAsyncData(`/software/${prop.series}`, () =>
  queryContent<SoftwareParsedContent>(prop.series)
    .where({ _type: 'markdown' })
    .findOne()
)

const { data: songs, pending: isLoading } = await useAsyncData(
  `/software/${prop.series}/songs`,
  () =>
    queryContent<SongParsedContent>(prop.series)
      .where({ _type: 'json' })
      .without('series')
      .find(),
  {
    transform: (songs: SongParsedContent[]) =>
      songs.map((s) => ({
        slug: s.slug,
        name: s.name,
        artist: s.artist,
        bpm: s.bpm,
        charts: s.charts.reduce((p, c) => {
          if (!p[c.playStyle]) {
            p[c.playStyle] = []
          }
          const name =
            software.value?.difficultyNames[c.difficulty] ?? 'Unknown'
          p[c.playStyle]!.push({
            level: c.level,
            difficulty: c.difficulty,
            name,
            color: `is-${normalizeDifficulty(name).toLowerCase()}`
          })
          return p
        }, {} as Partial<Record<PlayStyle, ChartInfo[]>>)
      }))
  }
)

const playStyles = computed(() => [
  ...new Set(songs.value?.flatMap((s) => Object.keys(s.charts)))
])
</script>
