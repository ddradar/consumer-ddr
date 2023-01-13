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
            v-for="v in props.row.series"
            :key="v.slug"
            class="button is-small"
            :to="`/series/${v.slug}/`"
            :style="{ backgroundColor: v.color, color: '#fff' }"
          >
            <span :title="v.title">{{ v.slug }}</span>
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
import Series from '~~/components/content/Series.vue'
import useSongList from '~~/composables/useSongList'

useHead({ title: 'Song List' })

const { songs } = await useSongList(
  '/songs/',
  'slug',
  'series',
  'name',
  'artist',
  'bpm'
)
</script>
