type Region = 'JP' | 'US' | 'EU' | 'None'

type Platform =
  | 'Play Station'
  | 'Play Station 2'
  | 'Dreamcast'
  | 'GAME BOY COLOR'
  | 'Wii'

export type Software = {
  id: string
  name: string
  region: Region
  platform: Platform
  launched: Date | null
}
