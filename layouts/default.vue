<template>
  <div>
    <b-navbar type="is-primary">
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" class="has-text-weight-bold" to="/">
          <img class="images" src="~assets/img/logo.svg" alt="Logo" />
          Consumer DDR
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="nuxt-link" to="/song/">
          Songs
        </b-navbar-item>
        <b-navbar-dropdown
          v-for="menu in menuList"
          :key="menu.title"
          :label="menu.title"
        >
          <b-navbar-item
            v-for="item in menu.subMenu"
            :key="item.name"
            tag="nuxt-link"
            :to="item.href"
            exact-active-class="is-active"
          >
            {{ item.name }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { getSoftwareList } from '~/plugins/software-repository'

type MenuItem = {
  title: string
  subMenu: { name: string; href: string }[]
}

@Component
export default class DefaultLayout extends Vue {
  get menuList(): MenuItem[] {
    return getSoftwareList().reduce((prev, current) => {
      const element = prev.find(
        (s) => s.title === `${current.platform} (${current.region})`
      )
      if (element) {
        element.subMenu.push({
          name: current.name,
          href: `/series/${current.id}/`
        })
      } else {
        prev.push({
          title: `${current.platform} (${current.region})`,
          subMenu: [
            {
              name: current.name,
              href: `/series/${current.id}/`
            }
          ]
        })
      }
      return prev
    }, [] as MenuItem[])
  }
}
</script>
