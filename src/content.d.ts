const regionList = ['JP', 'US', 'EU', 'None'] as const

const platforms = [
  'Play Station',
  'Play Station 2',
  'Dreamcast',
  'GAME BOY COLOR',
  'Wii',
] as const

export interface Software {
  slug: string
  title: string
  color?: string
  platform: typeof platforms[number]
  region: typeof regionList[number]
  launched: string
  difficulties: { [key in number]: { name: string; class: string } }
}

export interface Song {
  slug: string
  name: string
  artist: string
  bpm: number | string
  series: Record<string, Pick<Software, 'slug' | 'title' | 'color'>>
}
