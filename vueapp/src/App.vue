<template>
  <div class="main">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {};
  },
};
</script>

<style src="./assets/tailwind.css"></style>
