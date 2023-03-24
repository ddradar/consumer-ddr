import { readdirSync } from 'node:fs'
import { basename, join } from 'node:path'

import pkg from './package.json'

/** Series slug */
const series = readdirSync(join(__dirname, 'content', 'series'))
  .filter(f => f[0] !== '.')
  .map(f => basename(f, '.md'))
/** Songs slug */
const songs = readdirSync(join(__dirname, 'content', 'songs'))
  .filter(f => f[0] !== '.')
  .map(f => basename(f, '.md'))

export default defineNuxtConfig({
  generate: {
    routes: [
      ...series.map(s => `/series/${s}`),
      ...songs.map(s => `/songs/${s}`),
    ],
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description },
      ],
      link: [
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/icon-16.png',
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/icon-32.png',
        },
        {
          rel: 'icon',
          sizes: '48x48',
          type: 'image/png',
          href: '/icon-48.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
        },
      ],
    },
  },
  css: ['~/assets/css/main.scss'],
  build: {
    transpile: [/@oruga-ui\/oruga-next/],
  },
  modules: ['@nuxt/content', 'nuxt-vitest'],
})
