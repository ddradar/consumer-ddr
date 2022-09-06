<template>
  <div>
    <Navbar />

    <section class="main-content">
      <NuxtPage />
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (title) => (title ? `${title} - Consumer DDR` : 'Consumer DDR')
})
</script>
