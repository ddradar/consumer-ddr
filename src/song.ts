export function normalizeDifficulty(difficulty: number) {
  return ['BEGINNER', 'BASIC', 'DIFFICULT', 'EXPERT', 'CHALLENGE'][
    difficulty % 5
  ]
}
