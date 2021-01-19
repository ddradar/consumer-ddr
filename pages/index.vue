<template>
  <section class="section">
    <b-table :data="softwareList" striped narrowed>
      <b-table-column v-slot="props" field="name" label="Name" searchable>
        <nuxt-link class="is-size-6-mobile" :to="`/series/${props.row.slug}/`">
          {{ props.row.name }}
        </nuxt-link>
      </b-table-column>
      <b-table-column
        v-slot="props"
        field="platform"
        label="Platform"
        searchable
      >
        <span>
          {{ props.row.platform }}
          {{ props.row.region }}
        </span>
      </b-table-column>
      <b-table-column v-slot="props" field="launched" label="Launched">
        {{ props.row.launched }}
      </b-table-column>

      <template #empty>
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

import { Software } from '~/types/software'

type SoftListData = Omit<Software, 'difficultyNames' | 'region'> & {
  region: string
}

@Component
export default class IndexPage extends Vue {
  softwareList: SoftListData[] = []

  head(): MetaInfo {
    return {
      title: 'Consumer DDR',
      titleTemplate: ''
    }
  }

  async asyncData({ $content }: Pick<Context, '$content'>) {
    const rawSoftwareList = await $content({ deep: true })
      .where({ extension: { $eq: '.md' } })
      .sortBy('launched')
      .without('difficultyNames')
      .fetch<SoftListData>()
    const softwareList = [rawSoftwareList].flat().map((s) => {
      const region =
        s.region === 'JP'
          ? '\u{1F1EF}\u{1F1F5}'
          : s.region === 'US'
          ? '\u{1F1FA}\u{1F1F8}'
          : s.region === 'EU'
          ? '\u{1F1EA}\u{1F1FA}'
          : s.region === 'None'
          ? '\u{1F1FA}\u{1F1F3}'
          : '?'
      return { ...s, region }
    })
    return { softwareList }
  }
}
</script>
