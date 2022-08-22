import { vi } from 'vitest'
import { computed } from 'vue'

// Vue
vi.stubGlobal('computed', computed)

// Nuxt 3
vi.stubGlobal('useAsyncData', vi.fn())
vi.stubGlobal('useLazyAsyncData', vi.fn())
vi.stubGlobal('useHead', vi.fn())
vi.stubGlobal('useRoute', vi.fn())
