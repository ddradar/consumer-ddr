export type Song = {
  slug?: string
  series: string
  name: string
  artist: string
  bpm: number | string
  charts: Chart[]
}

export type Chart = {
  playStyle: PlayStyle
  difficulty: number
  level: number | '10+' | '?'
}

export type PlayStyle =
  | 'SINGLE'
  | 'DOUBLE'
  | 'COUPLE'
  | 'UNISON'
  | '6-PANELS'
  | '3-PANELS'
  | 'STEP BATTLE'
