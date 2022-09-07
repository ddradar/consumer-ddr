import type { Ref } from 'vue'

import type { SoftwareParsedContent } from '~~/src/content'

const keys = [
  'slug',
  'title',
  'color',
  'platform',
  'region',
  'launched'
] as const
export type SoftwareListData = Pick<SoftwareParsedContent, typeof keys[number]>

export default async function () {
  const { data } = await useAsyncData('/software', () =>
    queryContent<SoftwareParsedContent>()
      .where({ _type: 'markdown' })
      .sort({ launched: 1 })
      .only([...keys])
      .find()
  )

  return { softwareList: data as Ref<SoftwareListData[]> }
}
