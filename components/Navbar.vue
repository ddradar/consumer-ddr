<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item has-text-weight-bold" to="/">
        <img class="images" src="~assets/img/logo.svg" alt="Logo" />
        <span class="is-hidden-mobile">Consumer DDR</span>
      </NuxtLink>
      <SearchBox class="navbar-item" />

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isActive }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
        @click="toggleBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <NuxtLink class="navbar-item" to="/songs/">Songs</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import SearchBox from '~~/components/SearchBox.vue'

const isActive = ref(false)

const toggleBurger = () => (isActive.value = !isActive.value)
</script>
