import { RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SongList from '~~/components/content/SongList.vue'
import butterfly from '~~/content/1st-jp/butterfly.json'
import paranoia from '~~/content/1st-jp/paranoia.json'

import { mountAsync, plugins } from '../../test-utils'

const rawSongData = [butterfly, paranoia].map((d) => ({
  slug: d.slug,
  name: d.name,
  artist: d.artist,
  bpm: d.bpm,
  charts: d.charts
}))

describe('components/content/SongList.vue', () => {
  const software = {
    slug: '1st-jp',
    title: 'Dance Dance Revolution',
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
      slug: butterfly.slug,
      name: butterfly.name,
      artist: butterfly.artist,
      bpm: butterfly.bpm,
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
        ],
        COUPLE: [
          { difficulty: 5, level: 3, name: 'NORMAL', color: 'is-basic' },
          { difficulty: 1, level: 3, name: 'BASIC', color: 'is-basic' },
          { difficulty: 2, level: 4, name: 'ANOTHER', color: 'is-difficult' },
          { difficulty: 3, level: 6, name: 'MANIAC', color: 'is-expert' }
        ]
      }
    },
    {
      slug: paranoia.slug,
      name: paranoia.name,
      artist: paranoia.artist,
      bpm: paranoia.bpm,
      charts: {
        SINGLE: [
          { difficulty: 1, level: 6, name: 'BASIC', color: 'is-basic' },
          { difficulty: 2, level: 7, name: 'ANOTHER', color: 'is-difficult' },
          { difficulty: 3, level: 8, name: 'MANIAC', color: 'is-expert' }
        ],
        DOUBLE: [
          { difficulty: 1, level: 7, name: 'BASIC', color: 'is-basic' },
          { difficulty: 2, level: 8, name: 'ANOTHER', color: 'is-difficult' }
        ],
        COUPLE: [
          { difficulty: 1, level: 6, name: 'BASIC', color: 'is-basic' },
          { difficulty: 2, level: 7, name: 'ANOTHER', color: 'is-difficult' },
          { difficulty: 3, level: 8, name: 'MANIAC', color: 'is-expert' }
        ]
      }
    }
  ]
  const global = { plugins, stubs: { NuxtLink: RouterLinkStub } }
  const options = { global, props: { series: software.slug } }

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
      const wrapper = await mountAsync(SongList, options)

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
      const wrapper = await mountAsync(SongList, options)

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('useAsyncData()', () => {
    test('callse with transform option', async () => {
      // Arrange
      vi.mocked(useAsyncData).mockReset()
      vi.mocked(useAsyncData).mockImplementation(
        (path) =>
          Promise.resolve(
            path.endsWith('songs')
              ? { data: ref([]), pending: ref(true) }
              : { data: ref(software) }
          ) as any
      )

      // Act
      await mountAsync(SongList, options)
      const transform = vi.mocked(useAsyncData).mock.calls[1][2]?.transform!

      // Assert
      expect(transform(rawSongData)).toStrictEqual(songs)
    })
  })
})