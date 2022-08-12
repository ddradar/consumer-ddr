// eslint-disable-next-line import/no-named-as-default
import Ajv from 'ajv'
import { readdirSync, readFile, stat } from 'node:fs'
import { extname, join } from 'path'
import { promisify } from 'util'
import { describe, expect, test } from 'vitest'

import songSchema from '~~/public/song-schema.json'

const dirPath = join(__dirname, '..', '..', 'content')
const readFileAsync = promisify(readFile)
const statAsync = promisify(stat)

describe('/content', () => {
  const validate = new Ajv({ allowUnionTypes: true }).compile(songSchema)
  const seriesFolders = readdirSync(dirPath)

  describe.each(seriesFolders)('/%s', (series) => {
    test('has index.md', async () => {
      // Arrange
      const markDownFilePath = join(dirPath, series, 'index.md')

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
      expect(validate(jsonObject)).toBeTruthy()
      expect(jsonObject.series).toBe(series)
    })
  })
})
