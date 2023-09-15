import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/tailwind.css";
import "grapesjs/dist/css/grapes.min.css";  
import BaseSpinner from './components/Bases/BaseSpinner.vue'

const app = createApp(App);

app.component('base-spinner',BaseSpinner);



app.use(router);
app.mount("#app");
