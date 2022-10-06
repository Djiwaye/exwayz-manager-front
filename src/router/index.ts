import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import homeRoutes from '@/modules/home/router';
import PageNotFound from '@/components/unique/PageNotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'App',
    redirect: { name: 'LandingPage' }
  },
  ...homeRoutes,
  { path: '/404', name: '404', component: PageNotFound },
  { path: '*', redirect: '/404' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
