import type { Ref } from 'vue'

import type { SoftwareParsedContent } from '~~/src/content'

export default async function (slug: string) {
  const { data } = await useAsyncData(`/software/${slug}`, () =>
    queryContent<SoftwareParsedContent>(slug)
      .where({ _type: 'markdown', slug })
      .findOne()
  )

  return { software: data as Ref<SoftwareParsedContent> }
}
