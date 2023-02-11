import type { Ref } from 'vue'

import type { Software } from '~~/composables/useSoftwareData'

export type SoftwareListData = Omit<Software, 'difficulties'>

export default async function () {
  const { data } = await useAsyncData('/software', () =>
    queryContent<Software>('series')
      .sort({ launched: 1 })
      .only<(keyof Software)[]>([
        'slug',
        'title',
        'platform',
        'region',
        'launched',
      ])
      .find()
  )

  return { softwareList: data as Ref<SoftwareListData[]> }
}
