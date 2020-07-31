import { readdirSync, readFile, stat } from 'fs'
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
const statAsync = promisify(stat)

describe('/content', () => {
  const dirPath = join(rootPath, 'content')
  const seriesFolders = readdirSync(dirPath)

  describe.each(seriesFolders)('/%s', (series) => {
    test(`has ${series}.md`, async () => {
      // Arrange
      const markDownFilePath = join(dirPath, series, `${series}.md`)

      // Act
      const stat = await statAsync(markDownFilePath)

      // Assert
      expect(stat.isFile()).toBe(true)
    })

    const jsonFiles: string[] = readdirSync(join(dirPath, series)).filter(
      (p) => extname(p) === '.json'
    )
    test.each(jsonFiles)('%s should be valid json', async (fileName) => {
      // Arrange - Act
      const jsonString = await readFileAsync(
        join(dirPath, series, fileName),
        'utf8'
      )
      const jsonObject = JSON.parse(jsonString)

      // Assert
      expect(jsonObject).toMatchSchema(songSchema)
      expect(jsonObject.series).toBe(series)
    })
  })
})
