const { createApp } = require("vue");
import App from "./App.vue";
import { Frontegg } from "@frontegg/vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [{ name: "HomePage", path: "/", component: App }],
});

const app = createApp(App).use(router);

app.use(Frontegg, {
  contextOptions: {
    baseUrl: "https://app-6gckxzmis0q5.frontegg.com",
    clientId: "adefa070-cd3e-47ba-8d6d-43cb2484dcdb",
    appId: "281e7e28-c2f6-42b2-86e5-90e90e0fde05",
  },
  authOptions: {
    // keepSessionAlive: true // Uncomment this in order to maintain the session alive
  },
  hostedLoginBox: true,
  router,
});

app.mount("#app");
