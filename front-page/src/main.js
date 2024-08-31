import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Frontegg } from '@frontegg/vue';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
});


Vue.use(Frontegg, {
  contextOptions: {
    baseUrl: 'https://samples-demo.frontegg.com',
    clientId: '2e53360e-517e-4c38-a040-ba0e8639f2c7'
  },
  hostedLoginBox: true,
  router,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
