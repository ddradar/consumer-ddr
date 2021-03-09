import { NuxtConfig } from '@nuxt/types'

import pkg from './package.json'

const title = 'Consumer DDR'

const config: NuxtConfig = {
  target: 'static',
  head: {
    titleTemplate: `%s - ${title}`,
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['~/assets/css/styles.scss'],
  pwa: {
    manifest: {
      name: title,
      short_name: 'CS DDR',
      description: pkg.description,
      background_color: '#fff',
      theme_color: '#7957d5',
      orientation: 'any',
      start_url: '/'
    },
    meta: {
      name: title,
      description: pkg.description,
      theme_color: '#7957d5',
      twitterCard: 'summary'
    }
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://typescript.nuxtjs.org/
    '@nuxt/typescript-build'
  ],
  modules: [
    // Doc: https://buefy.org/documentation/
    ['nuxt-buefy', { css: false }],
    // Doc: https://content.nuxtjs.org/
    '@nuxt/content',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'
  ]
}

export default config
