<template>
  <section class="py-4">
    <h1 class="my-4 py-4 md:text-3xl text-2xl font-bold text-center">
      All pages
    </h1>
    <div class="text-3xl font-bold text-center" v-if="error">{{ error }}</div>
    <base-spinner v-if="isLoading"></base-spinner>
    <div
      v-else
      class="relative overflow-x-auto shadow-md sm:rounded-lg container px-4"
    >
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Id</th>
            <th scope="col" class="px-6 py-3">page name</th>

            <th scope="col" class="px-6 py-3">controller</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(el, key) in pages"
            :key="key"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ el.id }}
            </th>
            <td class="px-6 py-4">{{ el.title }}</td>

            <td class="px-6 py-4 text-right flex gap-2">
              <router-link
                :to="`edit/${el.id}`"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</router-link
              >
              <button
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                @click="remove(el.id)"
              >
                Delete
              </button>
              <router-link
                :to="`/page/${el.id}`"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >view</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import BaseSpinner from "../components/Bases/BaseSpinner.vue";
export default {
  components: { BaseSpinner },
  data() {
    return {
      isLoading: false,
      pages: [],
      error: "",
    };
  },
  methods: {
    async remove(id) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("deletePage", id);
        await this.getData();
      } catch (e) {
        this.error = e.message || "failed to get data";
      }
      this.isLoading = false;
    },
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
  },
  created() {
    this.getData();
  },
};
</script>

<style></style>
