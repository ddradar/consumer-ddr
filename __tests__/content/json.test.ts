import { readdirSync, readFile } from 'fs'
import { matchersWithOptions } from 'jest-json-schema'
import { extname, join } from 'path'
import { promisify } from 'util'

import songSchema from '~/static/song-schema.json'

expect.extend(
  matchersWithOptions({
    schemas: [songSchema]
  })
)
const rootPath = join(__dirname, '..', '..')
const readFileAsync = promisify(readFile)

describe('/content', () => {
  const dirPath = join(rootPath, 'content')
  const seriesFolders = readdirSync(dirPath)

  describe.each(seriesFolders)('/%s', (series) => {
    const jsonFiles: string[] = readdirSync(join(dirPath, series)).filter(
      (p) => extname(p) === '.json'
    )
    test.each(jsonFiles)('%s should be valid json', async (fileName) => {
      const jsonString = await readFileAsync(
        join(dirPath, series, fileName),
        'utf8'
      )
      const jsonObject = JSON.parse(jsonString)
      expect(jsonObject).toMatchSchema(songSchema)
    })
  })
})
