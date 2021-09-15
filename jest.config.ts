import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': '@vue/vue2-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/*/**/*.ts', '!<rootDir>/**/*.d.ts']
}
export default config
