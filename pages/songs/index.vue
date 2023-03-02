<template>
  <section class="section">
    <h1 class="title">Song List</h1>

    <OTable :data="songs" per-page="20" striped narrowed paginated>
      <OTableColumn v-slot="props" field="name" label="Name" searchable>
        <NuxtLink class="is-size-6-mobile" :to="`/songs/${props.row.slug}`">
          {{ props.row.name }}
        </NuxtLink>
      </OTableColumn>
      <OTableColumn v-slot="props" field="artist" label="Artist" searchable>
        <span class="is-size-6-mobile">{{ props.row.artist }}</span>
      </OTableColumn>
      <OTableColumn v-slot="props" field="bpm" label="BPM">
        {{ props.row.bpm }}
      </OTableColumn>
      <OTableColumn v-slot="props" label="Series">
        <div class="buttons">
          <NuxtLink
            v-for="slug in (props.row as (typeof songs[number])).series"
            :key="slug"
            class="button is-small"
            :to="getLinks(slug)"
            :style="{
              backgroundColor: seriesList[slug].backgroundColor,
              color: seriesList[slug].color,
            }"
          >
            <span :title="seriesList[slug].title">{{ slug }}</span>
          </NuxtLink>
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
import useSongList from '~~/composables/useSongList'
import seriesList from '~~/content/series/.seriesList.json'

useHead({ title: 'Song List' })

const { songs } = await useSongList(
  '/songs/',
  'slug',
  'series',
  'name',
  'artist',
  'bpm'
)

const getLinks = (slug: keyof typeof seriesList) =>
  (seriesList[slug] as { redirect?: string }).redirect ?? `/series/${slug}`
</script>
