import { readdirSync, readFile } from 'fs'
import { matchersWithOptions } from 'jest-json-schema'
import * as path from 'path'
import { promisify } from 'util'

import softwareSchema from '~/static/software-schema.json'

expect.extend(
  matchersWithOptions({
    schemas: [softwareSchema]
  })
)
const rootPath = path.join(__dirname, '..', '..')
const readFileAsync = promisify(readFile)

describe('/series/', () => {
  const dirPath = path.join(rootPath, 'series')
  const jsonFiles: string[] = readdirSync(dirPath).filter(
    (p) => path.extname(p) === '.json'
  )

  test.each(jsonFiles)('%s should be valid json', async (s) => {
    const jsonString = await readFileAsync(path.join(dirPath, s), 'utf8')
    const jsonObject = JSON.parse(jsonString)
    expect(jsonObject).toMatchSchema(softwareSchema)
  })

  describe('index.ts', () => {
    test('export all JSONs located /series/', async () => {
      const list = (await import('~/series/')).default
      expect(list).toHaveLength(jsonFiles.length)
    })
  })
})
