<template>
  <section class="section">
    <b-table :data="softwareList" striped narrowed mobile-cards>
      <template slot-scope="props">
        <b-table-column field="name" label="Name" searchable>
          <nuxt-link
            class="is-size-6-mobile"
            :to="`/series/${props.row.slug}/`"
          >
            {{ props.row.name }}
          </nuxt-link>
        </b-table-column>
        <b-table-column field="platform" label="Platform" searchable>
          <span>
            {{ props.row.platform }}
            {{ getRegionFlag(props.row.region) }}
          </span>
        </b-table-column>
        <b-table-column field="launched" label="Launched">
          {{ props.row.launched }}
        </b-table-column>
      </template>

      <template slot="empty">
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

import { Region, Software } from '~/types/software'

type SoftListData = Omit<Software, 'difficultyNames'>

@Component
export default class IndexPage extends Vue {
  softwareList: SoftListData[] = []

  head(): MetaInfo {
    return {
      title: 'Consumer DDR',
      titleTemplate: ''
    }
  }

  async asyncData({ $content }: Context) {
    const softwareList: SoftListData[] = await $content({ deep: true })
      .where({ extension: { $eq: '.md' } })
      .sortBy('launched')
      .without('difficultyNames')
      .fetch()
    return { softwareList }
  }

  getRegionFlag(region: Region) {
    if (region === 'JP') return '\u{1F1EF}\u{1F1F5}'
    if (region === 'US') return '\u{1F1FA}\u{1F1F8}'
    if (region === 'EU') return '\u{1F1EA}\u{1F1FA}'
    if (region === 'None') return '\u{1F1FA}\u{1F1F3}'
    return '?'
  }
}
</script>
