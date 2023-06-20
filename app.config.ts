import pkg from './package.json'

export default defineAppConfig({
  docus: {
    title: 'Consumer DDR',
    description: pkg.description,
    socials: {
      github: 'ddradar/consumer-ddr'
    },
    github: {
      dir: '/content',
      branch: 'main',
      repo: 'consumer-ddr',
      owner: 'ddradar',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})
