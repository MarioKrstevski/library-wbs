<template>
  <div id="app">
    <div id="nav">
      <Nav />
      <Secret />
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Secret from "@/components/Secret.vue";
export default {
  name: "App",
  components: {
    Nav,
    Secret
  }
};
</script>

<style lang="scss">
</style>
