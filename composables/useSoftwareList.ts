import type { Ref } from 'vue'

import type { Software } from '~~/src/content'

const keys = [
  'slug',
  'title',
  'color',
  'platform',
  'region',
  'launched'
] as const
export type SoftwareListData = Pick<Software, typeof keys[number]>

export default async function () {
  const { data } = await useAsyncData('/software', () =>
    queryContent<Software>('series')
      .sort({ launched: 1 })
      .only([...keys])
      .find()
  )

  return { softwareList: data as Ref<SoftwareListData[]> }
}
