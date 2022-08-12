<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item has-text-weight-bold" to="/">
        <img class="images" src="~assets/img/logo.svg" alt="Logo" />
        Consumer DDR
      </NuxtLink>

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
        <NuxtLink class="navbar-item" to="/songs/">Songs</NuxtLink>
      </div>
      <div class="navbar-end" />
    </div>
  </nav>
</template>
