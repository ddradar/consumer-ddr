<template>
  <section class="section">
    <h1 class="title">Consumer DDR</h1>

    <OTable :data="softwareList" striped>
      <OTableColumn v-slot="props" field="name" label="Name">
        <NuxtLink class="is-size-6-mobile" :to="`/series/${props.row.slug}`">
          {{ props.row.title }}
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
import useSoftwareList from '~~/composables/useSoftwareList'

const { softwareList } = await useSoftwareList()
</script>
