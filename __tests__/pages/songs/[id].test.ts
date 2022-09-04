import { RouterLinkStub } from '@vue/test-utils'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import first from '~~/content/1st-jp/trip-machine.json'
import third from '~~/content/3rd/trip-machine.json'
import SongDetail from '~~/pages/songs/[id].vue'

import { mountAsync, plugins } from '../../test-utils'

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
      { playStyle: 'SINGLE', difficulty: 1, levels: { '1st-jp': 6, '3rd': 6 } },
      { playStyle: 'SINGLE', difficulty: 2, levels: { '1st-jp': 7, '3rd': 7 } },
      { playStyle: 'SINGLE', difficulty: 3, levels: { '1st-jp': 8, '3rd': 8 } },
      { playStyle: 'DOUBLE', difficulty: 1, levels: { '1st-jp': 7, '3rd': 7 } },
      { playStyle: 'DOUBLE', difficulty: 2, levels: { '1st-jp': 8, '3rd': 8 } },
      { playStyle: 'COUPLE', difficulty: 1, levels: { '1st-jp': 6 } },
      { playStyle: 'COUPLE', difficulty: 2, levels: { '1st-jp': 7 } },
      { playStyle: 'COUPLE', difficulty: 3, levels: { '1st-jp': 8 } },
      { playStyle: 'UNISON', difficulty: 1, levels: { '3rd': 6 } },
      { playStyle: 'UNISON', difficulty: 2, levels: { '3rd': 7 } },
      { playStyle: 'UNISON', difficulty: 3, levels: { '3rd': 8 } }
    ]
  }
  const stubs = { NuxtLink: RouterLinkStub, Head: true, Title: true }
  const global = { plugins, stubs }

  beforeAll(() => {
    vi.mocked(useRoute).mockReturnValue({
      params: { id: 'trip-machine' }
    } as any)
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
      const transform = vi.mocked(useAsyncData).mock.calls[0][2]?.transform!

      // Assert
      expect(transform(rawSongData)).toStrictEqual(song)
    })
  })
})
