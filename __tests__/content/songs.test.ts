// @vitest-environment node
import { existsSync } from 'node:fs'
import { readdir, readFile } from 'node:fs/promises'
import { basename, dirname } from 'node:path'

import { load } from 'js-yaml'
import { describe, expect, test } from 'vitest'

import type { Song } from '~~/composables/useSongData'
import seriesList from '~~/content/series/.seriesList.json'

const dirpath = './content/songs'

describe('content/songs/', async () => {
  const slugs = new Set<string>()
  const subDirs = (await readdir(dirpath, { withFileTypes: true }))
    .filter(s => s.isDirectory())
    .map(d => d.name)

  describe.each(subDirs)('%s/', async series => {
    const fileNames = await readdir(`${dirpath}/${series}`)

    describe.each(fileNames)('%s', async fileName => {
      const markdownString = await readFile(
        `${dirpath}/${series}/${fileName}`,
        {
          encoding: 'utf8',
        }
      )
      const mdcContent = load(
        markdownString.match(/^-{3}(.+)-{3}$/ms)![1]
      ) as Song

      test('has valid syntax', () => {
        expect(mdcContent).toBeDefined()

        expect(mdcContent).toHaveProperty('slug', basename(fileName, '.md'))
        expect(slugs).not.contains(mdcContent.slug)
        slugs.add(mdcContent.slug)

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

      test('has valid hyperlink', async () => {
        const markdownLinks = markdownString.matchAll(
          /\[.+\]\(\/(.+?)(#.+)?\)/g
        )
        for (const link of markdownLinks) {
          const testName = `Match[${link.index}] (${link[0]})`
          const linkPath = link[1]
          expect(
            await exists(`./content/${linkPath}.md`),
            testName
          ).toBeTruthy()
        }
      })
    })
  })
})

async function exists(path: string) {
  if (!path.startsWith('./content/songs/')) return existsSync(path)

  const baseDir = dirname(path)
  const fileName = basename(path)
  const subDirs = (await readdir(baseDir, { withFileTypes: true })).filter(s =>
    s.isDirectory()
  )
  return subDirs.some(s => existsSync(`${baseDir}/${s.name}/${fileName}`))
}
