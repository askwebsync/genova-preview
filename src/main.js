import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import "tw-elements";

createApp(App).use(createPinia()).use(router).mount("#app");
