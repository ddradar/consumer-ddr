import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    coverage: {
      all: true,
      reporter: ['json', 'text'],
      include: ['**/*.ts', '**/*.vue'],
      exclude: [
        '**.config.ts',
        '**/*.d.ts',
        '**/__tests__/**',
        '.nuxt/**',
        'plugins/**',
      ],
    },
  },
})
