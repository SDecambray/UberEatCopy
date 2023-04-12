import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Restaurant from './pages/Restaurant.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/restaurant/:name',
    component: Restaurant,
    name: 'Restaurant',
  },
];

const routeur = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(routeur).mount('#app');
