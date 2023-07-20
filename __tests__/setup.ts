import { vi } from 'vitest'
import { computed, ref } from 'vue'

// Vue 3
vi.stubGlobal('ref', ref)
vi.stubGlobal('computed', computed)
