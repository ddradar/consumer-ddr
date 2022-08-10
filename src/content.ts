import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

type Region = 'JP' | 'US' | 'EU' | 'None'

type Platform =
  | 'Play Station'
  | 'Play Station 2'
  | 'Dreamcast'
  | 'GAME BOY COLOR'
  | 'Wii'

export interface SoftwareParsedContent extends ParsedContent {
  name: string
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
  series: string
  name: string
  artist: string
  bpm: number | string
  charts: Chart[]
}

export function getSlug(file: string | undefined) {
  return file?.replace(/^.+\/(.+)\.(json|md)$/, '$1')
}
