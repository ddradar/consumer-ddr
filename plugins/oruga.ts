import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Oruga, bulmaConfig)
})

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    OAutocomplete: typeof import('@oruga-ui/oruga-next/src/components/autocomplete')['OAutocomplete']
    OLoading: typeof import('@oruga-ui/oruga-next/src/components/loading')['OLoading']
    OTable: typeof import('@oruga-ui/oruga-next/src/components/table')['OTable']
    OTableColumn: typeof import('@oruga-ui/oruga-next/src/components/table')['OTableColumn']
    OTooltip: typeof import('@oruga-ui/oruga-next/src/components/tooltip')['OTooltip']
  }
}
