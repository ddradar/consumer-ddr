<template>
  <section v-if="software" class="section">
    <Head>
      <Title>{{ software.name }}</Title>
    </Head>
    <h1 class="title">{{ software.name }}</h1>
    <h2 class="subtitle">{{ software.platform }}({{ software.region }})</h2>

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
  </section>
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

const _route = useRoute()
const _id = _route.params.id as string

const { data: software } = await useAsyncData(`/software/${_id}`, () =>
  queryContent<SoftwareParsedContent>(_id)
    .where({ _type: 'markdown' })
    .findOne()
)
const { data: songs, pending: isLoading } = await useAsyncData(
  `/software/${_id}/songs`,
  () =>
    queryContent<SongParsedContent>(_id)
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
useHead(() => ({ title: software.value?.name }))

const playStyles = computed(() => [
  ...new Set(songs.value?.flatMap((s) => Object.keys(s.charts)))
])
</script>
