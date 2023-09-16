<template>
  <div class="main">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
<<<<<<< HEAD
import { initFlowbite } from "flowbite";

=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
export default {
  components: { NavBar },
  data() {
    return {};
  },
<<<<<<< HEAD
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
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
};
</script>

<style src="./assets/tailwind.css"></style>
