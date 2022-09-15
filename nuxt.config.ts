import { defineNuxtConfig } from 'nuxt'

import pkg from './package.json'

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description }
      ],
      link: [
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/icon-16.png'
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/icon-32.png'
        },
        {
          rel: 'icon',
          sizes: '48x48',
          type: 'image/png',
          href: '/icon-48.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
        }
      ]
    }
  },
  css: ['~/assets/css/main.scss'],
  build: {
    transpile: [/@oruga-ui\/oruga-next/]
  },
  modules: [
    // Doc: https://content.nuxtjs.org/
    '@nuxt/content'
  ]
})
