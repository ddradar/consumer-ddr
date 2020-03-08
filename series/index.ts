import { Chart } from '~/types/chart'
import { Song } from '~/types/song'

import firstJp from './1st-jp.json'
import secondRemixJp from './2nd-remix-jp.json'

type SoftWareJson = {
  id: string
  name: string
  platform: string
  region: string
  launched: string
  songs: (Song & { charts: Omit<Chart, 'songId'>[] })[]
  difficultyNames: { [key: number]: string }
}

const softwareList = [firstJp, secondRemixJp] as SoftWareJson[]
export default softwareList
