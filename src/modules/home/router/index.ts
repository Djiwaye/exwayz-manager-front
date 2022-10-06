/* eslint-disable */
import { RouteConfig } from 'vue-router';
import Home from '@/modules/home/Home.vue';
import LandingPage from '@/modules/home/views/LandingPage.vue';
const TermsOfUse = () => import('@/modules/home/views/TermsOfUse.vue');
const PrivacyPolicy = () => import('@/modules/home/views/PrivacyPolicy.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: { name: 'LandingPage' },
    children: [
      {
        path: '/home/landing',
        name: 'LandingPage',
        component: LandingPage,
        meta: {
          title: 'home.LandingPage.metaTitle'
        }
      },
      {
        path: '/home/terms',
        name: 'TermsOfUse',
        component: TermsOfUse,
        meta: {
          title: 'home.TermsOfUse.metaTitle'
        }
      },
      {
        path: '/home/privacy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
        meta: {
          title: 'home.PrivacyPolicy.metaTitle'
        }
      }
    ]
  }
];

export default routes;
