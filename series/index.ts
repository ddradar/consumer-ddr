import { Chart } from '~/types/chart'
import { Song } from '~/types/song'

import firstJp from './1st-jp.json'
import secondDc from './2nd-dc.json'
import second from './2nd.json'
import third from './3rd.json'
import best from './best.json'
import club1 from './club-1.json'
import club2 from './club-2.json'
import clubDc from './club-dc.json'
import dsDkt from './ds-dct.json'
import dsTkd from './ds-tkd.json'

type SoftWareJson = {
  id: string
  name: string
  platform: string
  region: string
  launched: string
  songs: (Song & { charts: Omit<Chart, 'songId'>[] })[]
  difficultyNames: { [key: number]: string }
}

const softwareList = [
  firstJp,
  second,
  club1,
  dsTkd,
  club2,
  secondDc,
  dsDkt,
  clubDc,
  third,
  best
] as SoftWareJson[]
export default softwareList
