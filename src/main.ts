import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import VueI18n from 'vue-i18n';
import VueCookies from 'vue-cookies';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
import messages from '@/assets/localization/messages.json';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { renderError } from '@/helpers/renderErrorPage';
import LowerCaseFilter from '@/filters/lowercase';
import { dateUtils } from '@/mixins/dateUtils';

Vue.config.productionTip = false;

// USES
Vue.use(VueI18n);
Vue.use(VueCookies);

// FILTERS
Vue.filter('lowercase', LowerCaseFilter);
Vue.use(VueFilterDateFormat);

// MIXINS
Vue.mixin(dateUtils);

// DIRECTIVES

// Load localized messages
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
});

async function initApp() {
  new Vue({
    vuetify,
    i18n,
    router,
    store,
    render: (h) => h(App)
  }).$mount('#app');
}

function isIE11(): boolean {
  // eslint-disable-next-line
  if ((window.document as any).documentMode) {
    return true;
  }
  return false;
}

try {
  if (isIE11()) {
    throw new Error('IE11');
  }
  initApp().catch((error) => {
    renderError(error, i18n);
  });
} catch (err) {
  const error = err as Error;
  renderError(error, i18n);
}
