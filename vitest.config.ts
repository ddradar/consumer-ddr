import Vue from '@vitejs/plugin-vue'
import fs from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

const NuxtTsConfig = fs.readFileSync('./.nuxt/tsconfig.json').toString()
const tsConfigFormated = JSON.parse(
  NuxtTsConfig.replace(
    /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
    (m, g) => (g ? '' : m)
  )
)

const alias: Record<string, string> = {}

Object.entries(
  tsConfigFormated.compilerOptions.paths as Record<string, string[]>
).forEach(([key, value]) => {
  alias[key] = resolve(__dirname, value[0])
})

export default defineConfig({
  plugins: [Vue()],
  resolve: { alias },
  test: {
    environment: 'jsdom',
    setupFiles: ['./__tests__/stubWindow.ts', './__tests__/stubGlobal.ts'],
    coverage: {
      enabled: true,
      all: true,
      reporter: ['json', 'text'],
      include: ['**/*.ts', '**/*.vue'],
      exclude: [
        '**.config.ts',
        '**/*.d.ts',
        '**/__tests__/**',
        '.nuxt/**',
        'plugins/**'
      ]
    }
  }
})
