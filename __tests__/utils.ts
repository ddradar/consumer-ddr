import Oruga from '@oruga-ui/oruga'
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import { createLocalVue } from '@vue/test-utils'

export function createVue() {
  const localVue = createLocalVue()
  localVue.use(Oruga, bulmaConfig)
  return localVue
}
