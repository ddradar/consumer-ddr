import { readdir, readFile, stat } from 'node:fs/promises'
import { extname, join } from 'node:path'

import Ajv from 'ajv'
import { describe, expect, test } from 'vitest'

import songSchema from '~~/public/song-schema.json'

const dirPath = join(__dirname, '..', '..', 'content')

describe('/content', async () => {
  const validate = new Ajv({ allowUnionTypes: true }).compile(songSchema)
  const seriesFolders = await readdir(dirPath)

  describe.each(seriesFolders)('/%s', async (series) => {
    test('has index.md', async () => {
      // Arrange
      const markDownFilePath = join(dirPath, series, 'index.md')

      // Act
      const fileStat = await stat(markDownFilePath)

      // Assert
      expect(fileStat.isFile()).toBe(true)
    })

    const jsonFiles: string[] = (await readdir(join(dirPath, series))).filter(
      (p) => extname(p) === '.json'
    )
    test.each(jsonFiles)('%s should be valid json', async (fileName) => {
      // Arrange - Act
      const jsonString = await readFile(join(dirPath, series, fileName), 'utf8')
      const jsonObject = JSON.parse(jsonString)

      // Assert
      expect(validate(jsonObject)).toBeTruthy()
      expect(jsonObject.slug).toBe(fileName.substring(0, fileName.length - 5))
      expect(jsonObject.series).toBe(series)
    })
  })
})
