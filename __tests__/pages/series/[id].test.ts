import { RouterLinkStub } from '@vue/test-utils'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SeriesDetail from '~~/pages/series/[id].vue'

import { mountAsync, plugins } from '../../test-utils'

describe('pages/series/[id].vue', () => {
  const software = {
    slug: '1st-jp',
    name: 'Dance Dance Revolution',
    platform: 'Play Station',
    region: 'JP',
    launched: '1999-04-10',
    difficultyNames: {
      '1': 'BASIC',
      '2': 'ANOTHER',
      '3': 'MANIAC',
      '5': 'NORMAL'
    }
  }
  const songs = [
    {
      slug: 'butterfly',
      series: '1st-jp',
      name: 'butterfly',
      artist: 'smile. dk',
      bpm: 135,
      charts: {
        SINGLE: [
          { difficulty: 5, level: 3, name: 'NORMAL', color: 'is-basic' },
          { difficulty: 1, level: 3, name: 'BASIC', color: 'is-basic' },
          { difficulty: 2, level: 4, name: 'ANOTHER', color: 'is-difficult' },
          { difficulty: 3, level: 6, name: 'MANIAC', color: 'is-expert' }
        ],
        DOUBLE: [
          { difficulty: 1, level: 4, name: 'BASIC', color: 'is-basic' },
          { difficulty: 2, level: 6, name: 'ANOTHER', color: 'is-difficult' }
        ]
      }
    },
    {
      slug: 'paranoia',
      name: 'PARANOiA',
      artist: '180',
      bpm: 180,
      charts: {
        SINGLE: [
          { difficulty: 1, level: 6, name: 'BASIC', color: 'is-basic' },
          { difficulty: 2, level: 7, name: 'ANOTHER', color: 'is-difficult' },
          { difficulty: 3, level: 8, name: 'MANIAC', color: 'is-expert' }
        ],
        DOUBLE: [
          { difficulty: 1, level: 7, name: 'BASIC', color: 'is-basic' },
          { difficulty: 2, level: 8, name: 'ANOTHER', color: 'is-difficult' }
        ]
      }
    }
  ]
  const stubs = { NuxtLink: RouterLinkStub, Head: true, Title: true }
  const global = { plugins, stubs }

  beforeAll(() => {
    vi.mocked(useRoute).mockReturnValue({ params: { id: '1st-jp' } } as any)
  })

  describe('snapshot test', () => {
    test('renders loading state', async () => {
      // Arrange
      vi.mocked(useAsyncData).mockImplementation(
        (path) =>
          Promise.resolve(
            path.endsWith('songs')
              ? { data: ref([]), pending: ref(true) }
              : { data: ref(software) }
          ) as any
      )

      // Act
      const wrapper = await mountAsync(SeriesDetail, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })

    test('renders song info', async () => {
      // Arrange
      vi.mocked(useAsyncData).mockImplementation(
        (path) =>
          Promise.resolve(
            path.endsWith('songs')
              ? { data: ref(songs), pending: ref(false) }
              : { data: ref(software) }
          ) as any
      )

      // Act
      const wrapper = await mountAsync(SeriesDetail, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
