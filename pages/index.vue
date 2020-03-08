<template>
  <section class="section">
    <b-table :data="softwareList" striped narrowed mobile-cards>
      <template slot-scope="props">
        <b-table-column field="name" label="Name" searchable>
          <nuxt-link class="is-size-6-mobile" :to="`/series/${props.row.id}/`">
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
          {{ props.row.launched.toLocaleDateString() }}
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
import { Component, Vue } from 'vue-property-decorator'

import { getSoftwareList } from '~/plugins/software-repository'
import { Region } from '~/types/software'

@Component
export default class IndexPage extends Vue {
  get softwareList() {
    return getSoftwareList()
  }

  getRegionFlag(region: Region) {
    return region === 'JP'
      ? '\u{1F1EF}\u{1F1F5}'
      : region === 'US'
      ? '\u{1F1FA}\u{1F1F8}'
      : region === 'EU'
      ? '\u{1F1EA}\u{1F1FA}'
      : '?'
  }
}
</script>
