import { RouterLinkStub } from '@vue/test-utils'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import useSoftwareList from '~~/composables/useSoftwareList'
import first from '~~/content/1st-jp/trip-machine.json'
import third from '~~/content/3rd/trip-machine.json'
import SongDetail from '~~/pages/songs/[id].vue'

import { mockSoftwareList, mountAsync, plugins } from '../../test-utils'

vi.mock('~~/composables/useSoftwareList')

const thirdSeries = {
  slug: '3rd',
  color: 'crimson',
  title: 'Dance Dance Revolution 3rd MIX',
  platform: 'Play Station',
  region: 'JP',
  launched: '2000-06-01'
} as const
const rawSongData = [first, third].map((d) => ({
  series: d.series,
  name: d.name,
  artist: d.artist,
  bpm: d.bpm,
  charts: d.charts
}))

describe('pages/songs/[id].vue', () => {
  const song = {
    name: first.name,
    artist: first.artist,
    bpm: first.bpm,
    series: [first.series, third.series],
    charts: [
      {
        playStyle: 'SINGLE',
        difficulty: 1,
        seriesList: [
          {
            slug: mockSoftwareList[0].slug,
            title: mockSoftwareList[0].title,
            color: mockSoftwareList[0].color,
            level: 6
          },
          {
            slug: thirdSeries.slug,
            title: thirdSeries.title,
            color: thirdSeries.color,
            level: 6
          }
        ]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 2,
        seriesList: [
          {
            slug: mockSoftwareList[0].slug,
            title: mockSoftwareList[0].title,
            color: mockSoftwareList[0].color,
            level: 7
          },
          {
            slug: thirdSeries.slug,
            title: thirdSeries.title,
            color: thirdSeries.color,
            level: 7
          }
        ]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 3,
        seriesList: [
          {
            slug: mockSoftwareList[0].slug,
            title: mockSoftwareList[0].title,
            color: mockSoftwareList[0].color,
            level: 8
          },
          {
            slug: thirdSeries.slug,
            title: thirdSeries.title,
            color: thirdSeries.color,
            level: 8
          }
        ]
      },
      {
        playStyle: 'DOUBLE',
        difficulty: 1,
        seriesList: [
          {
            slug: mockSoftwareList[0].slug,
            title: mockSoftwareList[0].title,
            color: mockSoftwareList[0].color,
            level: 7
          },
          {
            slug: thirdSeries.slug,
            title: thirdSeries.title,
            color: thirdSeries.color,
            level: 7
          }
        ]
      },
      {
        playStyle: 'DOUBLE',
        difficulty: 2,
        seriesList: [
          {
            slug: mockSoftwareList[0].slug,
            title: mockSoftwareList[0].title,
            color: mockSoftwareList[0].color,
            level: 8
          },
          {
            slug: thirdSeries.slug,
            title: thirdSeries.title,
            color: thirdSeries.color,
            level: 8
          }
        ]
      },
      {
        playStyle: 'COUPLE',
        difficulty: 1,
        seriesList: [
          {
            slug: mockSoftwareList[0].slug,
            title: mockSoftwareList[0].title,
            color: mockSoftwareList[0].color,
            level: 6
          }
        ]
      },
      {
        playStyle: 'COUPLE',
        difficulty: 2,
        seriesList: [
          {
            slug: mockSoftwareList[0].slug,
            title: mockSoftwareList[0].title,
            color: mockSoftwareList[0].color,
            level: 7
          }
        ]
      },
      {
        playStyle: 'COUPLE',
        difficulty: 3,
        seriesList: [
          {
            slug: mockSoftwareList[0].slug,
            title: mockSoftwareList[0].title,
            color: mockSoftwareList[0].color,
            level: 8
          }
        ]
      },
      {
        playStyle: 'UNISON',
        difficulty: 1,
        seriesList: [
          {
            slug: thirdSeries.slug,
            title: thirdSeries.title,
            color: thirdSeries.color,
            level: 6
          }
        ]
      },
      {
        playStyle: 'UNISON',
        difficulty: 2,
        seriesList: [
          {
            slug: thirdSeries.slug,
            title: thirdSeries.title,
            color: thirdSeries.color,
            level: 7
          }
        ]
      },
      {
        playStyle: 'UNISON',
        difficulty: 3,
        seriesList: [
          {
            slug: thirdSeries.slug,
            title: thirdSeries.title,
            color: thirdSeries.color,
            level: 8
          }
        ]
      }
    ]
  }
  const stubs = { NuxtLink: RouterLinkStub }
  const global = { plugins, stubs }

  beforeAll(() => {
    vi.mocked(resolveComponent).mockReturnValue(RouterLinkStub as any)
    vi.mocked(useRoute).mockReturnValue({
      params: { id: 'trip-machine' }
    } as any)
    const softwareList = ref([...mockSoftwareList, thirdSeries])
    vi.mocked(useSoftwareList).mockResolvedValue({ softwareList })
    vi.mocked(useAsyncData).mockReset()
    vi.mocked(useAsyncData).mockResolvedValue({ data: ref(song) } as any)
  })

  describe('snapshot test', () => {
    test('renders correctly', async () => {
      const wrapper = await mountAsync(SongDetail, { global })
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('useAsyncData()', () => {
    test('calls with transform option', async () => {
      // Arrange - Act
      await mountAsync(SongDetail, { global })
      const transform = vi.mocked(useAsyncData).mock.calls[0][2]!.transform!

      // Assert
      expect(transform(rawSongData)).toStrictEqual(song)
    })
  })
})
