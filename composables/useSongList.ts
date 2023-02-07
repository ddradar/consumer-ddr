import type { Ref } from 'vue'

import type { Song } from '~~/composables/useSongData'

export default async function <T extends keyof Song>(
  key: string,
  ...keys: T[]
) {
  const { data } = await useAsyncData(key, () =>
    queryContent<Song>('songs').sort({ name: 1 }).only(keys).find()
  )

  return { songs: data as Ref<Pick<Song, T>[]> }
}
