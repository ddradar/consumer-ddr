import { matchersWithOptions } from 'jest-json-schema'

import softwareSchema from '~/static/software-schema.json'

expect.extend(
  matchersWithOptions({
    schemas: [softwareSchema]
  })
)

describe('/static/software-schema.json', () => {
  test('should be valid json-schema', () => {
    expect(softwareSchema).toBeValidSchema()
  })
  test('can validate sample json', async () => {
    const sampleJson = (await import('./software-schema.test.json')).default
    expect(sampleJson).toMatchSchema(softwareSchema)
  })
})
