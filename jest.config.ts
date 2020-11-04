import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/*/**/*.ts', '!<rootDir>/**/*.d.ts']
}
export default config
