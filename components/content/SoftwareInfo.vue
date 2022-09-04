<template>
  <table class="table">
    <tbody>
      <tr>
        <th>発売日</th>
        <td>{{ software!.launched }}</td>
      </tr>
      <tr>
        <th>機種</th>
        <td>{{ software!.platform }}</td>
      </tr>
      <tr>
        <th>リージョン</th>
        <td>{{ software!.region }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { SoftwareParsedContent } from '~~/src/content'

interface Props {
  series: string
}

const prop = defineProps<Props>()

const { data: software } = await useAsyncData(`/software/${prop.series}`, () =>
  queryContent<SoftwareParsedContent>(prop.series)
    .where({ _type: 'markdown' })
    .findOne()
)
</script>
