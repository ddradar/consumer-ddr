import { createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'

export function createVue() {
  const localVue = createLocalVue()
  localVue.use(Buefy)
  return localVue
}
