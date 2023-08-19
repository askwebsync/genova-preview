import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import VueMatomo from "vue-matomo";
import "../public/assets/css/main.css";
import store from "../src/store/store";

createApp(App)
  .use(store)
  .use(router)
  // .use(VueMatomo, {
  //   host: "https://genovaindonesia.com",
  //   siteId: 1,
  //   trackerFileName: "matomo",
  //   router: router,
  //   enableLinkTracking: true,
  //   requireConsent: true,
  //   rememberConsentGiven: true,
  //   trackInitialView: true,
  //   disableCookies: false,
  //   enableHeartBeatTimer: false,
  //   heartBeatTimerInterval: 15,
  //   debug: false,
  //   userId: undefined,
  //   cookieDomain: undefined,
  //   domains: undefined,
  //   preInitActions: [],
  // })
  .mount("#app");

// window._paq.push(["trackPageView"]);
// window._paq.push(["requireConsent"]);
