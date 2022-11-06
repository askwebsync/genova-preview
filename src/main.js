import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import "tw-elements";
import BackToTop from "vue-backtotop";

createApp(App).use(createPinia()).use(router).use(BackToTop).mount("#app");
