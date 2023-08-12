import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMatomo from "vue-matomo";
import "../public/assets/css/main.css";
import store from "../src/store/store";

createApp(App)
  .use(store)
  .use(router)
  .use(VueMatomo, {
    host: "https://genovaindonesia.com",
    siteId: 1,
    trackerFileName: "matomo",
    router: router,
    enableLinkTracking: true,
    requireConsent: true, // Require user tracking consent before processing data
    rememberConsentGiven: true, // Automatically remember consent
    trackInitialView: true,
    disableCookies: false,
    enableHeartBeatTimer: false,
    heartBeatTimerInterval: 15,
    debug: false,
    userId: undefined,
    cookieDomain: undefined,
    domains: undefined,
    preInitActions: [],
  })
  .mount("#app");

window._paq.push(["trackPageView"]); // To track pageview

// Require user tracking consent before processing data
window._paq.push(["requireConsent"]);

// OR require user cookie consent before storing and using any cookies
// window._paq.push(["requireCookieConsent"]);

// You can also add the following if you want to set consent immediately:
// window._paq.push(["setConsentGiven"]); // Remember tracking consent was given for all subsequent page views and visits
// OR
// window._paq.push(["setCookieConsentGiven"]); // Remember cookie consent was given for all subsequent page views and visits
