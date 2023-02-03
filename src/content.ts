import type seriesList from '~~/content/series/.seriesList.json'

export const regionList = ['JP', 'US', 'EU', 'None'] as const

export const platforms = [
  'Play Station',
  'Play Station 2',
  'Dreamcast',
  'GAME BOY COLOR',
  'Wii'
] as const

export interface Software {
  slug: keyof typeof seriesList
  title: string
  platform: (typeof platforms)[number]
  region: (typeof regionList)[number]
  launched: string
  difficulties: { [key in number]: { name: string; class: string } }
}

export interface Song {
  slug: string
  name: string
  artist: string
  bpm: number | string
  series: (keyof typeof seriesList)[]
}
