import softwareList from '~/series'
import { Chart } from '~/types/chart'
import { Software } from '~/types/software'
import { Song } from '~/types/song'

export const getSoftwareList = (): Software[] =>
  softwareList.map(
    (s) =>
      ({
        id: s.id,
        name: s.name,
        region: s.region,
        platform: s.platform,
        launched: new Date(s.launched)
      } as Software)
  )

type SongWithCharts = Song & { charts: Chart[] }
type SoftwareInfo = Software & { songs: SongWithCharts[] }
export const getSoftwareInfo = (id: string): SoftwareInfo | undefined => {
  const info = softwareList.find((s) => s.id === id)
  if (info === undefined) return info
  return {
    id: info.id,
    name: info.name,
    region: info.region,
    platform: info.platform,
    launched: new Date(info.launched),
    songs: info.songs.map((s) => ({
      id: s.id,
      name: s.name,
      artist: s.artist,
      bpm: s.bpm,
      charts: s.charts.map((c) => ({
        songId: s.id,
        playStyle: c.playStyle,
        difficulty: c.difficulty,
        level: c.level
      }))
    }))
  } as SoftwareInfo
}
