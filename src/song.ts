const basicNames = ['BASIC', 'NORMAL', 'LIGHT']
const difficultNames = ['ANOTHER', 'DIFFICULT', 'TRICK']
const expertNames = ['MANIAC', 'SSR', 'EXPERT']
const beginnerNames = ['BEGINNER']

export function normalizeDifficulty(difficultyName: string) {
  const name = difficultyName.toUpperCase()
  if (basicNames.includes(name)) return 'BASIC'
  if (difficultNames.includes(name)) return 'DIFFICULT'
  if (expertNames.includes(name)) return 'EXPERT'
  if (beginnerNames.includes(name)) return 'BEGINNER'
  return 'CHALLENGE'
}
