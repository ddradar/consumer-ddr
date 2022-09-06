import { vi } from 'vitest'
import { computed, ref } from 'vue'

// Vue
vi.stubGlobal('computed', computed)
vi.stubGlobal('ref', ref)

// Nuxt 3
vi.stubGlobal('useAsyncData', vi.fn())
vi.stubGlobal('useLazyAsyncData', vi.fn())
vi.stubGlobal('useHead', vi.fn())
vi.stubGlobal('useRoute', vi.fn())
vi.stubGlobal('useRouter', vi.fn())
vi.stubGlobal('resolveComponent', vi.fn())
