const basicNames = ['BASIC', 'NORMAL', 'LIGHT', '楽', 'STANDARD']
const difficultNames = ['ANOTHER', 'DIFFICULT', 'TRICK', '踊']
const expertNames = ['MANIAC', 'SSR', 'EXPERT', '激', 'HEAVY']
const beginnerNames = ['BEGINNER', '習']

export function normalizeDifficulty(difficultyName: string) {
  const name = difficultyName.toUpperCase()
  if (basicNames.includes(name)) return 'BASIC'
  if (difficultNames.includes(name)) return 'DIFFICULT'
  if (expertNames.includes(name)) return 'EXPERT'
  if (beginnerNames.includes(name)) return 'BEGINNER'
  return 'CHALLENGE'
}
