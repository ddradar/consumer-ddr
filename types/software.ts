type Region = 'JP' | 'US' | 'EU'

type Platform = 'Play Station' | 'Play Station 2' | 'GAME BOY' | 'Wii'

export type Software = {
  id: string
  name: string
  region: Region
  platform: Platform
  launched: Date | null
}
