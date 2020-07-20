import { matchersWithOptions } from 'jest-json-schema'

import songSchema from '~/static/song-schema.json'

expect.extend(
  matchersWithOptions({
    schemas: [songSchema]
  })
)

describe('/static/song-schema.json', () => {
  test('should be valid json-schema', () => {
    expect(songSchema).toBeValidSchema()
  })
  test('can validate sample json', async () => {
    const sampleJson = (await import('./song-schema.test.json')).default
    expect(sampleJson).toMatchSchema(songSchema)
  })
})
