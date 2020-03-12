import softwareList from '../series'
import { Chart } from '../types/chart'
import { Song } from '../types/song'

type ChartItem = Omit<Chart, 'level' | 'songId'> & { level: (number | '10+')[] }
type SongInfo = Song & {
  charts: ChartItem[]
  softwareIds: string[]
}

export const getSongList = (): SongInfo[] =>
  softwareList.reduce((prev, current) => {
    for (const song of current.songs) {
      const songIndex = prev.findIndex((s) => s.id === song.id)
      if (songIndex !== -1) {
        prev[songIndex].softwareIds.push(current.id)
        for (const chart of song.charts) {
          const chartInfo = prev[songIndex].charts.find(
            (c) =>
              c.playStyle === chart.playStyle &&
              c.difficulty === chart.difficulty
          )
          if (chartInfo && !chartInfo.level.find((l) => l === chart.level)) {
            chartInfo.level.push(chart.level)
          } else if (!chartInfo) {
            prev[songIndex].charts.push({
              ...chart,
              level: [chart.level]
            })
          }
        }
      } else {
        prev.push({
          ...song,
          charts: song.charts.map((c) => ({
            ...c,
            level: [c.level]
          })),
          softwareIds: [current.id]
        })
      }
    }
    return prev
  }, [] as SongInfo[])

export const getSongInfo = (id: string): SongInfo | undefined =>
  softwareList.reduce((prev, current) => {
    const song = current.songs.find((s) => s.id === id)
    if (!song) return prev
    if (!prev)
      return {
        ...song,
        charts: song.charts.map((c) => ({
          ...c,
          level: [c.level]
        })),
        softwareIds: [current.id]
      }
    prev.softwareIds.push(current.id)
    for (const chart of song.charts) {
      const chartInfo = prev.charts.find(
        (c) =>
          c.playStyle === chart.playStyle && c.difficulty === chart.difficulty
      )
      if (chartInfo && !chartInfo.level.find((l) => l === chart.level)) {
        chartInfo.level.push(chart.level)
      } else if (!chartInfo) {
        prev.charts.push({
          ...chart,
          level: [chart.level]
        })
      }
    }
    return prev
  }, undefined as SongInfo | undefined)
