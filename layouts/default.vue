<template>
  <div>
    <Navbar :menu-list="menuList"/>

    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Navbar, { MenuItem } from '~/components/Navbar.vue'
import { Software } from '~/types/software'

@Component({ components: { Navbar } })
export default class DefaultLayout extends Vue {
  menuList: MenuItem[] = []

  async fetch() {
    const content = await this.$content({ deep: true })
      .where({ extension: { $eq: '.md' } })
      .fetch<Software>()

    this.menuList = [content].flat().reduce((prev, current) => {
      const element = prev.find(
        (s) => s.title === `${current.platform} (${current.region})`
      )
      if (element) {
        element.subMenu.push({
          name: current.name,
          href: `/series/${current.slug}/`
        })
      } else {
        prev.push({
          title: `${current.platform}${
            current.region === 'None' ? '' : ` (${current.region})`
          }`,
          subMenu: [
            {
              name: current.name,
              href: `/series/${current.slug}/`
            }
          ]
        })
      }
      return prev
    }, [] as MenuItem[])
  }
}
</script>
