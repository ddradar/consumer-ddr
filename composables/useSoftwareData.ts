import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Ref } from 'vue'

import type seriesList from '~~/content/series/.seriesList.json'

export const regionList = ['JP', 'US', 'EU', 'None'] as const

export const platforms = [
  'Play Station',
  'Play Station 2',
  'Dreamcast',
  'GAME BOY COLOR',
  'GAME CUBE',
  'Wii',
  'Xbox 360',
  'Windows',
] as const

export interface Software {
  slug: keyof typeof seriesList
  title: string
  platform: (typeof platforms)[number]
  region: (typeof regionList)[number]
  launched: string
  difficulties: { [key in number]: { name: string; class: string } }
}

export default async function (slug: string) {
  const { data } = await useAsyncData(`/software/${slug}`, () =>
    queryContent<Software & ParsedContent>()
      .where({ _type: 'markdown', slug })
      .findOne()
  )

  return { software: data as Ref<Software & ParsedContent> }
}
