<template>
  <div v-html="html" ref="box"></div>
</template>

<script>
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";

export default {
  data() {
    return {
      html: "",
      css: "",
    };
  },
  watch: {
    html(val) {
      this.html = val;
    },
    css(vall) {
      this.css = vall;
    },
  },
  methods: {
    get() {
      this.html = localStorage.getItem("html");
      this.css = localStorage.getItem("css");

      var styleElement = document.createElement("style");
      styleElement.type = "text/css";
      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = this.css;
      } else {
        styleElement.appendChild(document.createTextNode(this.css));
      }

      document.head.appendChild(styleElement);
    },
  },
  updated() {
    this.get();
  },
  mounted() {
    this.get();
  },
};
</script>

<style></style>
