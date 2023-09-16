import "./assets/main.css";
import router from "./router";
<<<<<<< HEAD
import store from "./store";
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/tailwind.css";
import "grapesjs/dist/css/grapes.min.css";  
import BaseSpinner from './components/Bases/BaseSpinner.vue'

const app = createApp(App);

app.component('base-spinner',BaseSpinner);


<<<<<<< HEAD
app.use(store);
=======

>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
app.use(router);
app.mount("#app");
