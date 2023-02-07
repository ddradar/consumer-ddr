import { existsSync } from 'node:fs'
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

    test('has valid syntax', () => {
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

    test('uses Chart component correctly', () => {
      const chartComponents = markdownString.matchAll(
        /:charts\{:difficulties="difficulties" levels="(.+?)" charts="(.+?)"\}/g
      )
      for (const component of chartComponents) {
        const testName = `Match[${component.index}] (${component[0]})`
        const levels = component[1].split(',')
        const charts = component[2].split(',')
        expect(charts, testName).toHaveLength(levels.length)
        for (const chart of charts) {
          expect(Object.keys(mdcContent.difficulties), testName).toContain(
            chart
          )
        }
      }
    })

    test('has valid hyperlink', () => {
      const markdownLinks = markdownString.matchAll(/\[.+\]\(\/(.+?)\)/g)
      for (const link of markdownLinks) {
        const testName = `Match[${link.index}] (${link[0]})`
        const linkPath = link[1]
        expect(existsSync(`./content/${linkPath}.md`)).toBeTruthy()
      }
    })
  })
})
