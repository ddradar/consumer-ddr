const basicNames = ['BASIC', 'NORMAL', 'LIGHT', '楽']
const difficultNames = ['ANOTHER', 'DIFFICULT', 'TRICK', '踊', 'STANDARD']
const expertNames = ['MANIAC', 'SSR', 'EXPERT', '激', 'HEAVY']
const beginnerNames = ['BEGINNER']

export function normalizeDifficulty(difficultyName: string) {
  const name = difficultyName.toUpperCase()
  if (basicNames.includes(name)) return 'BASIC'
  if (difficultNames.includes(name)) return 'DIFFICULT'
  if (expertNames.includes(name)) return 'EXPERT'
  if (beginnerNames.includes(name)) return 'BEGINNER'
  return 'CHALLENGE'
}
