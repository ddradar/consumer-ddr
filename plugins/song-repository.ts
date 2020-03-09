import softwareList from '../series'
import { Chart } from '../types/chart'
import { Song } from '../types/song'

type ChartItem = Omit<Chart, 'level'> & { level: (number | '10+')[] }
type SongInfo = Song & {
  charts: ChartItem[]
  softwareIds: string[]
}

export const getSongList = (): SongInfo[] =>
  softwareList.reduce((prev, current) => {
    for (const song of current.songs) {
      const songInfo = prev.find((s) => s.id === song.id)
      if (songInfo) {
        songInfo.softwareIds.push(current.id)
        for (const chart of song.charts) {
          const chartInfo = songInfo.charts.find(
            (c) =>
              c.playStyle === chart.playStyle &&
              c.difficulty === chart.difficulty
          )
          if (chartInfo && !chartInfo.level.find((l) => l === chart.level)) {
            chartInfo.level.push(chart.level)
          } else {
            songInfo.charts.push({
              ...chart,
              songId: song.id,
              level: [chart.level]
            })
          }
        }
      } else {
        prev.push({
          ...song,
          charts: song.charts.map((c) => ({
            ...c,
            songId: song.id,
            level: [c.level]
          })),
          softwareIds: [current.id]
        })
      }
    }
    return prev
  }, [] as SongInfo[])
