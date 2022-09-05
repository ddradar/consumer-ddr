<template>
  <table class="table">
    <tbody>
      <tr>
        <th>発売日</th>
        <td>{{ software.launched }}</td>
      </tr>
      <tr>
        <th>機種</th>
        <td>{{ software.platform }}</td>
      </tr>
      <tr>
        <th>リージョン</th>
        <td>{{ software.region }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import useSoftwareData from '~~/composables/useSoftwareData'

interface Props {
  series: string
}

const prop = defineProps<Props>()

const { software } = await useSoftwareData(prop.series)
</script>
