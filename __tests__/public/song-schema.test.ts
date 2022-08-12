// eslint-disable-next-line import/no-named-as-default
import Ajv from 'ajv'
import { describe, expect, test } from 'vitest'

import songSchema from '~~/public/song-schema.json'

describe('/public/song-schema.json', () => {
  const validator = new Ajv()
  test('should be valid json-schema', () => {
    expect(validator.validateSchema(songSchema)).toBeTruthy()
  })
})
