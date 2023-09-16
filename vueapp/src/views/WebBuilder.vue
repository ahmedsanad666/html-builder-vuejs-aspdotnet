<template>
  <section class="min-h-screen">
<<<<<<< HEAD
    <div v-if="error" class="text-center md:text-3xl text-2xl text-red-700">
      {{ error }}
    </div>
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
    <div class="bg-[#463A3C] flex py-3 flex-col space-y-2 px-4">
      <label for="tilte" class="text-white font-bold tracking-wider">
        Page Title</label
      >
      <input
        type="text"
        class="md:w-1/4 w-1/2 bg-[#514547] outline-none py-2 px-3 rounded-md text-white"
        id="title"
        placeholder=" page title"
<<<<<<< HEAD
        v-model.trim="title"
        required=""
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
      />
    </div>
    <base-spinner v-if="isLoading"></base-spinner>
    <div id="gjs" v-else></div>
  </section>
</template>

<script>
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import plugin from "grapesjs-preset-webpage";
import grapesjsblocks from "grapesjs-blocks-basic";
import ViFrame from "../components/ViFrame.vue";
export default {
  name: "BuilderHtml",
  components: { ViFrame },
  data() {
    return {
      isLoading: false,
<<<<<<< HEAD
      title: "",
      error: "",
    };
  },

  computed: {},
  methods: {},
  watch: {
    title(val) {
      this.title = val;
    },
  },
=======
      html: "",
      css: "",
      s: false,
    };
  },

  methods: {},

>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
  mounted() {
    const vueRouter = this.$router;
    const editor = grapesjs.init({
      container: "#gjs",
      height: "900px",
      width: "100%",
      plugins: [plugin, grapesjsblocks],
      pluginsOpts: {
        "gjs-blocks-basic": {},
      },
      storageManager: {
        id: "gjs-",
        type: "local",
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices: [
          {
            id: "desktop",
            name: "Desktop",
            width: "",
          },
          {
            id: "tablet",
            name: "Tablet",
            width: "768px",
            widthMedia: "992px",
          },
          {
            id: "mobilePortrait",
            name: "Mobile portrait",
            width: "320px",
            widthMedia: "575px",
          },
        ],
      },
      pluginsOpts: {
        [plugin]: {
          blocksBasicOpts: {
            blocks: [
              "column1",
              "column2",
              "column3",
              "column3-7",
              "text",
              "link",
              "image",
              "video",
            ],
            flexGrid: 1,
          },
          blocks: ["link-block", "quote", "text-basic", "column3"],
        },
      },
    });

    editor.Panels.addButton("options", {
      id: "saveBtn",
      className: "savePro",
      label: '<i class="fa fa-save"></i>',
      class: "fa fa-clock",
      attributes: { title: "Save Project" },
      active: false,
      context: "shdafkadsfjlk",
      tagName: "span",

<<<<<<< HEAD
      command: async () => {
        if (this.title === "") {
          alert("title cant be empty");
          return;
        }
        const payload = {
          title: this.title,
          html: editor.getHtml(),
          css: editor.getCss(),
        };
        this.isLoading = true;
        try {
          await this.$store.dispatch("addPage", payload);
          vueRouter.replace("/home");
        } catch (e) {
          this.error = e.message || "failed to send data";
        }
        this.isLoading = false;
=======
      command: async function () {
        this.html = editor.getHtml();
        this.css = editor.getCss();

        localStorage.setItem("html", this.html);
        localStorage.setItem("css", this.css);
        vueRouter.replace("/home");
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
      },
    });
  },
};
</script>

<style scoped>
.fa .fa-star {
  border: 1px red solid;
}
.someClass {
  border: 1px red solid !important;
}
</style>
