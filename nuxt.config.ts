import { NuxtConfig } from '@nuxt/types'

import pkg from './package.json'

const title = 'Consumer DDR'

const config: NuxtConfig = {
  target: 'static',
  head: {
    titleTemplate: `%s - ${title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/icon-16.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/icon-32.png' },
      { rel: 'icon', sizes: '48x48', type: 'image/png', href: '/icon-48.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/assets/css/styles.scss'],
  pwa: {
    icon: {
      iconFileName: 'icon-1024.png'
    },
    manifest: {
      name: title,
      short_name: 'CS DDR',
      description: pkg.description,
      background_color: '#fff',
      theme_color: '#7957d5',
      orientation: 'any'
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
