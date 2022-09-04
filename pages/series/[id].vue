<template>
  <section v-if="software" class="section">
    <Head>
      <Title>{{ software.title }}</Title>
    </Head>
    <ContentRenderer class="content" :value="software" />
  </section>
</template>

<script lang="ts" setup>
import type { SoftwareParsedContent } from '~~/src/content'

const _route = useRoute()
const _id = _route.params.id as string

const { data: software } = await useAsyncData(`/software/${_id}`, () =>
  queryContent<SoftwareParsedContent>(_id)
    .where({ _type: 'markdown' })
    .findOne()
)

useHead(() => ({ title: software.value?.title }))
</script>
