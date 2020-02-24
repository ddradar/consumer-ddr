import softwareList from '~/series'
import { Software } from '~/types/software'

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
