import { Chart } from '~/types/chart'
import { Song } from '~/types/song'

import firstJp from './1st-jp.json'
import second from './2nd.json'
import club1 from './club-1.json'

type SoftWareJson = {
  id: string
  name: string
  platform: string
  region: string
  launched: string
  songs: (Song & { charts: Omit<Chart, 'songId'>[] })[]
  difficultyNames: { [key: number]: string }
}

const softwareList = [firstJp, second, club1] as SoftWareJson[]
export default softwareList
