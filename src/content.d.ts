import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

type Region = 'JP' | 'US' | 'EU' | 'None'

type Platform =
  | 'Play Station'
  | 'Play Station 2'
  | 'Dreamcast'
  | 'GAME BOY COLOR'
  | 'Wii'

export interface SoftwareParsedContent extends ParsedContent {
  slug: string
  title: string
  platform: Platform
  region: Region
  launched: string
  difficultyNames: { [key in number]: string }
}

export type PlayStyle =
  | 'SINGLE'
  | 'DOUBLE'
  | 'COUPLE'
  | 'UNISON'
  | '6-PANELS'
  | '3-PANELS'
  | 'STEP BATTLE'

export type Chart = {
  playStyle: PlayStyle
  difficulty: number
  level: number | '10+' | '?'
}

export interface SongParsedContent extends ParsedContent {
  slug: string
  series: string
  name: string
  artist: string
  bpm: number | string
  charts: Chart[]
}
