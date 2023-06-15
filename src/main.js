import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import router from "./router";
import "../public/assets/css/main.css";
const store = createStore();
createApp(App).use(store).use(router).mount("#app");
