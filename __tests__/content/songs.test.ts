import { readdir, readFile } from 'node:fs/promises'
import { basename } from 'node:path'

import { load } from 'js-yaml'
import { describe, expect, test } from 'vitest'

import seriesList from '~~/content/series/.seriesList.json'
import { Song } from '~~/src/content'

const dirpath = './content/songs'

describe('content/songs/', async () => {
  const fileNames = (await readdir(dirpath)).filter((s) => s[0] !== '.')

  describe.each(fileNames)('%s', async (fileName) => {
    const markdownString = await readFile(`${dirpath}/${fileName}`, {
      encoding: 'utf8'
    })
    const mdcContent = load(
      markdownString.match(/^-{3}(.+)-{3}$/ms)![1]
    ) as Song

    test('has valid syntax', () => {
      expect(mdcContent).toBeDefined()

      expect(mdcContent).toHaveProperty('slug', basename(fileName, '.md'))

      expect(mdcContent).toHaveProperty('name')

      expect(mdcContent).toHaveProperty('artist')
      expect(mdcContent).toHaveProperty('from')

      expect(mdcContent).toHaveProperty('bpm')
      if (typeof mdcContent.bpm === 'string')
        expect(mdcContent.bpm).toMatch(/^(\?\?\?|\d+-\d+)$/)

      expect(mdcContent).toHaveProperty('series')
      for (const s of mdcContent.series) {
        expect(Object.keys(seriesList)).toContain(s)
      }
    })

    test('uses Level component correctly', () => {
      const levelComponents = markdownString.matchAll(
        /:level\{slug="(.+?)" level="?(.+?)"?\}/g
      )
      for (const component of levelComponents) {
        const testName = `Match[${component.index}] (${component[0]})`
        expect(mdcContent.series, testName).toContain(component[1])
        expect(component[2], testName).toMatch(/^\d+(\.5)?|\?|10\+$/)
      }
    })

    test('has valid hyperlink', () => {
      const markdownLinks = markdownString.matchAll(/\[.+\]\(\/(.+?)\)/g)
      for (const link of markdownLinks) {
        const testName = `Match[${link.index}] (${link[0]})`
        const linkPath = link[1]
        expect(existsSync(`./content/${linkPath}.md`), testName).toBeTruthy()
      }
    })
  })
})
