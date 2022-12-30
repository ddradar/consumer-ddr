<template>
  <section class="section">
    <Head>
      <Title>{{ song.name }}</Title>
    </Head>
    <ContentRenderer class="content" :value="song" />
  </section>
</template>

<script lang="ts" setup>
import useSongData from '~~/composables/useSongData'

const _route = useRoute()
const _id = _route.params.id as string

const { song } = await useSongData(_id)

useHead({ title: song.value?.name })
</script>
