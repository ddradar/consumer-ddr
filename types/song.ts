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

export function normalizeDifficulty(difficultyName: string) {
  const name = difficultyName.toUpperCase()
  if (['BASIC', 'NORMAL', 'LIGHT'].includes(name)) return 'BASIC'
  if (['ANOTHER', 'DIFFICULT', 'TRICK'].includes(name)) return 'DIFFICULT'
  if (['MANIAC', 'SSR', 'EXPERT'].includes(name)) return 'EXPERT'
  if (['BEGINNER'].includes(name)) return 'BEGINNER'
  return 'CHALLENGE'
}
