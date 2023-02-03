import { readdir, readFile } from 'node:fs/promises'
import { basename } from 'node:path'

import { load } from 'js-yaml'
import { describe, expect, test } from 'vitest'

import seriesList from '~~/content/series/.seriesList.json'
import { platforms, regionList, Software } from '~~/src/content'

const dirpath = './content/series'

describe('content/series/', async () => {
  const fileNames = (await readdir(dirpath)).filter((s) => s[0] !== '.')

  describe.each(fileNames)('%s', async (fileName) => {
    const slug = basename(fileName, '.md')
    const markdownString = await readFile(`${dirpath}/${fileName}`, {
      encoding: 'utf8'
    })
    const mdcContent = load(
      markdownString.match(/^-{3}(.+)-{3}$/ms)![1]
    ) as Software

    test('has valid MDC syntax', () => {
      expect(mdcContent).toBeDefined()

      expect(mdcContent).toHaveProperty('slug', slug)

      expect(mdcContent).toHaveProperty('platform')
      expect(platforms).toContain(mdcContent.platform)

      expect(mdcContent).toHaveProperty('region')
      expect(regionList).toContain(mdcContent.region)

      expect(mdcContent).toHaveProperty('launched')
      expect(mdcContent.launched).toMatch(/^\d{4}-\d{2}-\d{2}$/)

      expect(mdcContent).toHaveProperty('difficulties')
      for (const key in mdcContent.difficulties) {
        const element = mdcContent.difficulties[key]
        expect(element).toHaveProperty('name')
        expect(element).toHaveProperty('class')
        expect([
          'is-primary',
          'is-beginner',
          'is-basic',
          'is-difficult',
          'is-expert',
          'is-challenge',
          'is-unknown'
        ]).toContain(element.class)
      }
    })

    test('.seriesList.json has property', () => {
      expect(Object.keys(seriesList)).toContain(slug)
    })
  })
})
