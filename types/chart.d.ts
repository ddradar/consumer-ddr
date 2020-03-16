export type PlayStyle =
  | 'SINGLE'
  | 'DOUBLE'
  | 'COUPLE'
  | 'UNISON'
  | '6-PANELS'
  | '3-PANELS'
  | 'STEP BATTLE'

export type Chart = {
  songId: string
  playStyle: PlayStyle
  difficulty: number
  level: number | '10+'
}
