<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item has-text-weight-bold" to="/">
        <img class="images" src="~assets/img/logo.svg" alt="Logo" />
        Consumer DDR
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/song/">Songs</nuxt-link>
      </div>
      <div class="navbar-end" />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface MenuItem {
  title: string
  subMenu: { name: string; href: string }[]
}

@Component
export default class Navbar extends Vue {
  @Prop({ required: true }) readonly menuList!: MenuItem[]
}
</script>
