<template>
  <div class="text-3xl font-bold text-center" v-if="error">{{ error }}</div>
  <base-spinner v-if="isLoading"></base-spinner>
  <div v-html="html" ref="box"></div>
</template>

<script>
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";

export default {
  data() {
    return {
      isLoading: false,
      error: "",
      html: "",
      css: "",
    };
  },
  watch: {
    $route(to, from) {
      this.getData();
    },
    html(val) {
      this.html = val;
    },
    css(vall) {
      this.css = vall;
    },
  },
  methods: {
    async getData() {
      const id = +this.$route.params.pageId;
      this.isLoading = true;
      try {
        await this.$store.dispatch("allPages");
        const pages = this.$store.getters.getPages;
        const page = pages.find((el) => el.id === id);
        this.html = page.html;
        this.css = page.css;
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = this.css;
        } else {
          styleElement.appendChild(document.createTextNode(this.css));
        }

        document.head.appendChild(styleElement);
      } catch (e) {
        this.error = e.message || "failed to get data";
      }

      this.isLoading = false;
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

<style></style>
