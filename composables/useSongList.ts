import type { Ref } from 'vue'

import type { Song } from '~~/src/content'

export default async function (key: string, ...keys: (keyof Song)[]) {
  const { data } = await useAsyncData(key, () =>
    queryContent<Song>('songs').sort({ name: 1 }).only(keys).find()
  )

  return { songs: data as Ref<Pick<Song, (typeof keys)[number]>[]> }
}
