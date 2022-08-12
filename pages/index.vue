<template>
  <section class="section">
    <Head>
      <Title>Consumer DDR</Title>
    </Head>
    <h1 class="title">Consumer DDR</h1>

    <OTable :data="softwareList" striped :loading="isLoading">
      <OTableColumn v-slot="props" field="name" label="Name">
        <NuxtLink class="is-size-6-mobile" :to="`/series/${props.row.slug}/`">
          {{ props.row.name }}
        </NuxtLink>
      </OTableColumn>
      <OTableColumn v-slot="props" field="platform" label="Platform">
        <span>
          {{ props.row.platform }}
          {{ props.row.region }}
        </span>
      </OTableColumn>
      <OTableColumn v-slot="props" field="launched" label="Launched">
        {{ props.row.launched }}
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
import type { SoftwareParsedContent } from '~~/src/content'

const { data: softwareList, pending: isLoading } = await useAsyncData(
  '/software',
  () =>
    queryContent<SoftwareParsedContent>()
      .where({ _type: 'markdown' })
      .sort({ launched: 1 })
      .only(['slug', 'name', 'platform', 'region', 'launched'])
      .find()
)
</script>
