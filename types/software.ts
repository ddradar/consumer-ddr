type Region = 'JP' | 'US' | 'EU'
export const regionList: Region[] = ['JP', 'US', 'EU']

type Platform = 'PlayStation' | 'PlayStation2' | 'GameBoy'
export const platformList: Platform[] = [
  'PlayStation',
  'PlayStation2',
  'GameBoy'
]

export type Software = {
  id: string
  name: string
  region: Region
  platform: Platform
  launched: Date | null
}
