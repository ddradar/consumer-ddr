import * as fs from 'fs'
import { matchersWithOptions } from 'jest-json-schema'
import * as path from 'path'

import softwareSchema from '~/static/software-schema.json'

expect.extend(
  matchersWithOptions({
    schemas: [softwareSchema]
  })
)

describe('/series/*.json', () => {
  const songsDirPath = path.join(__dirname, '..', '..', 'series')
  const jsonFilesPath = fs
    .readdirSync(songsDirPath)
    .filter((p) => path.extname(p) === '.json')
  const jsonStrings = jsonFilesPath.map((filePath) => {
    return fs.readFileSync(path.join(songsDirPath, filePath), 'utf8')
  })
  test.each(jsonStrings)('should be valid json', (s) => {
    const jsonObject = JSON.parse(s)
    expect(jsonObject).toMatchSchema(softwareSchema)
  })
})
