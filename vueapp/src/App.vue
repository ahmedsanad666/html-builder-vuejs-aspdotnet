<template>
  <div class="main">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import { initFlowbite } from "flowbite";

export default {
  components: { NavBar },
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      initFlowbite();
    },
  },
  updated() {
    initFlowbite();
  },
  mounted() {
    initFlowbite();
  },
};
</script>

<style src="./assets/tailwind.css"></style>
