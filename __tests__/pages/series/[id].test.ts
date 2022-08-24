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
      slug: 'make-it-better',
      name: 'MAKE IT BETTER',
      artist: 'mitsu-O!',
      bpm: 118,
      charts: [
        { playStyle: 'SINGLE', difficulty: 1, level: 5 },
        { playStyle: 'SINGLE', difficulty: 2, level: 6 },
        { playStyle: 'SINGLE', difficulty: 3, level: 8 },
        { playStyle: 'DOUBLE', difficulty: 1, level: 5 },
        { playStyle: 'DOUBLE', difficulty: 2, level: 6 }
      ]
    },
    {
      slug: 'paranoia',
      name: 'PARANOiA',
      artist: '180',
      bpm: 180,
      charts: [
        { playStyle: 'SINGLE', difficulty: 1, level: 6 },
        { playStyle: 'SINGLE', difficulty: 2, level: 7 },
        { playStyle: 'SINGLE', difficulty: 3, level: 8 },
        { playStyle: 'DOUBLE', difficulty: 1, level: 7 },
        { playStyle: 'DOUBLE', difficulty: 2, level: 8 }
      ]
    },
    {
      slug: 'trip-machine',
      name: 'TRIP MACHINE',
      artist: 'DE-SIRE',
      bpm: 160,
      charts: [
        { playStyle: 'SINGLE', difficulty: 1, level: 6 },
        { playStyle: 'SINGLE', difficulty: 2, level: 7 },
        { playStyle: 'SINGLE', difficulty: 3, level: 8 },
        { playStyle: 'DOUBLE', difficulty: 1, level: 7 },
        { playStyle: 'DOUBLE', difficulty: 2, level: 8 }
      ]
    }
  ]
  const global = {
    plugins,
    stubs: { NuxtLink: RouterLinkStub, Head: true, Title: true }
  }

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
