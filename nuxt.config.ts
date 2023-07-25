export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/plausible', '@nuxt/devtools'],
  nitro: {
    prerender: {
      ignore: ['/songs/*'],
    },
  },
})
