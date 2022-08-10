export function normalizeDifficulty(difficultyName: string) {
  const name = difficultyName.toUpperCase()
  if (['BASIC', 'NORMAL', 'LIGHT'].includes(name)) return 'BASIC'
  if (['ANOTHER', 'DIFFICULT', 'TRICK'].includes(name)) return 'DIFFICULT'
  if (['MANIAC', 'SSR', 'EXPERT'].includes(name)) return 'EXPERT'
  if (['BEGINNER'].includes(name)) return 'BEGINNER'
  return 'CHALLENGE'
}
