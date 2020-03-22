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
import dsDct from './dct.json'
import disneyJp from './disney-jp.json'
import gb1 from './gb-1.json'
import gb2 from './gb-2.json'
import gb3 from './gb-3.json'
import ohaGb from './oha-gb.json'
import dsTkd from './tkd.json'

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
  firstJp, // 1999-04-10
  second, // 1999-08-26
  club1, // 1999-11-25
  dsTkd, // 1999-12-09
  club2, // 1999-12-22
  secondDc, // 2000-02-17
  dsDct, // 2000-04-20
  clubDc, // 2000-04-27
  third, // 2000-06-01
  gb1, // 2000-08-03
  gb2, // 2000-11-16
  disneyJp, // 2000-11-30
  best, // 2000-12-21
  ohaGb, // 2001-02-08
  gb3 // 2001-03-15
] as SoftWareJson[]
export default softwareList
