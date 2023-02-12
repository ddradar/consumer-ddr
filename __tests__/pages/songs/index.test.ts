import { RouterLinkStub } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import useSongList from '~~/composables/useSongList'
import SongList from '~~/pages/songs/index.vue'

import { mountAsync, plugins } from '../../test-utils'

vi.mock('~~/composables/useSongList')

describe('pages/songs/index.vue', () => {
  const songs = [
    {
      slug: 'am-3p',
      name: 'AM-3P',
      artist: 'KTz',
      bpm: 130,
      series: ['2nd'],
    },
    {
      slug: 'paranoia',
      name: 'PARANOiA',
      artist: '180',
      bpm: 180,
      series: ['1st-jp', '2nd'],
    },
  ] as Awaited<ReturnType<typeof useSongList>>['songs']['value']
  const global = { plugins, stubs: { NuxtLink: RouterLinkStub, Series: true } }

  beforeEach(() => {
    vi.mocked(useSongList).mockResolvedValue({ songs: ref(songs) })
  })

  describe('snapshot test', () => {
    test('renders song info', async () => {
      // Arrange - Act
      const wrapper = await mountAsync(SongList, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
