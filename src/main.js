import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../public/assets/css/main.css";
// Import your Vuex store file
import store from "../src/store/store";

createApp(App).use(store).use(router).mount("#app");
