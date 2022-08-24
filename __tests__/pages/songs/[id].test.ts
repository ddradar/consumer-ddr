import { RouterLinkStub } from '@vue/test-utils'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SongDetail from '~~/pages/songs/[id].vue'

import { mountAsync, plugins } from '../../test-utils'

describe('pages/songs/[id].vue', () => {
  const songs = [
    {
      slug: 'trip-machine',
      series: '1st-jp',
      name: 'TRIP MACHINE',
      artist: 'DE-SIRE',
      bpm: 160,
      charts: [
        { playStyle: 'SINGLE', difficulty: 1, level: 6 },
        { playStyle: 'SINGLE', difficulty: 2, level: 7 },
        { playStyle: 'SINGLE', difficulty: 3, level: 8 },
        { playStyle: 'DOUBLE', difficulty: 1, level: 7 },
        { playStyle: 'DOUBLE', difficulty: 2, level: 8 },
        { playStyle: 'COUPLE', difficulty: 1, level: 6 },
        { playStyle: 'COUPLE', difficulty: 2, level: 7 },
        { playStyle: 'COUPLE', difficulty: 3, level: 8 }
      ]
    },
    {
      slug: 'trip-machine',
      series: '3rd',
      name: 'TRIP MACHINE',
      artist: 'DE-SIRE',
      bpm: 160,
      charts: [
        { playStyle: 'SINGLE', difficulty: 1, level: 6 },
        { playStyle: 'SINGLE', difficulty: 2, level: 7 },
        { playStyle: 'SINGLE', difficulty: 3, level: 8 },
        { playStyle: 'DOUBLE', difficulty: 1, level: 7 },
        { playStyle: 'DOUBLE', difficulty: 2, level: 8 },
        { playStyle: 'UNISON', difficulty: 1, level: 6 },
        { playStyle: 'UNISON', difficulty: 2, level: 7 },
        { playStyle: 'UNISON', difficulty: 3, level: 8 }
      ]
    }
  ]
  const global = {
    plugins,
    stubs: { NuxtLink: RouterLinkStub, Head: true, Title: true }
  }

  beforeAll(() => {
    vi.mocked(useRoute).mockReturnValue({
      params: { id: 'trip-machine' }
    } as any)
    vi.mocked(useAsyncData).mockResolvedValue({ data: ref(songs) } as any)
  })

  describe('snapshot test', () => {
    test('renders correctly', async () => {
      const wrapper = await mountAsync(SongDetail, { global })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
