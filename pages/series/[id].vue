<template>
  <section class="section">
    <Head>
      <Title>{{ software.title }}</Title>
    </Head>
    <ContentRenderer class="content" :value="software" />
  </section>
</template>

<script lang="ts" setup>
import useSoftwareData from '~~/composables/useSoftwareData'

const _route = useRoute()
const _id = _route.params.id as string

const { software } = await useSoftwareData(_id)

useHead(() => ({ title: software.value.title }))
</script>
