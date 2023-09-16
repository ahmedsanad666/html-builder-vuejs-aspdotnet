<template>
  <nav class="bg-white text-slate-800 md:w-[70%] w-[90%] m-auto" v-if="ShowNav">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'webBuilder' }">Add Page</router-link>
          </li>
<<<<<<< HEAD
          <li>
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              AllPages
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownHover"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li v-for="(el, k) in pages" :key="k">
                  <router-link
                    :to="`/page/${el.id}`"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{ el.title }}</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      ShowNav: true,
<<<<<<< HEAD
      pages: [],
    };
  },
  methods: {
    async getData() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("allPages");
        this.pages = this.$store.getters.getPages;
      } catch (e) {
        this.error = e.message || "failed to get data";
      }
      this.isLoading = false;
    },
    checkcurrentroute(route) {
      if (
        route.meta.title === "webBuilder" ||
        route.meta.title === "EditView"
      ) {
=======
    };
  },
  methods: {
    checkcurrentroute(route) {
      if (route.meta.title === "webBuilder") {
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
        this.ShowNav = false;
      } else {
        this.ShowNav = true;
      }
    },
  },
  watch: {
    $route(newRoute) {
      this.checkcurrentroute(newRoute);
    },
  },
<<<<<<< HEAD
  created() {
    this.getData();
  },
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
};
</script>

<style lang="scss" scoped>
li {
  a {
    color: #5f5a5a;
    font-weight: bold;
  }
}

.router-link-active {
  color: rgb(66, 40, 150);
}
</style>
