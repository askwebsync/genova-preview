import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import { VueperSlides, VueperSlide } from "vueperslides";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueperSlide);
app.use(VueperSlides);

app.mount("#app");
