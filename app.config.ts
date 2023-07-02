import pkg from './package.json'

export default defineAppConfig({
  docus: {
    title: 'Consumer DDR',
    description: pkg.description,
    socials: {
      github: 'ddradar/consumer-ddr',
    },
    github: {
      dir: '/content',
      branch: 'master',
      repo: 'consumer-ddr',
      owner: 'ddradar',
      edit: true,
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      title: 'Consumer DDR',
      showLinkIcon: true,
      fluid: true,
    },
  },
})
