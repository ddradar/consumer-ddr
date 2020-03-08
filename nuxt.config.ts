import { Configuration } from '@nuxt/types'

import pkg from './package.json'
import { getSoftwareInfo, getSoftwareList } from './plugins/software-repository'

const config: Configuration = {
  mode: 'universal',
  head: {
    title: 'Consumer DDR',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://typescript.nuxtjs.org/
    '@nuxt/typescript-build'
  ],
  modules: [
    // Doc: https://buefy.org/documentation/
    'nuxt-buefy',
    '@nuxtjs/pwa'
  ],
  generate: {
    routes() {
      const softwareList = getSoftwareList().map((s) => s.id)
      return softwareList.map((id) => ({
        route: `/series/${id}`,
        payload: getSoftwareInfo(id)
      }))
    }
  }
}

export default config
