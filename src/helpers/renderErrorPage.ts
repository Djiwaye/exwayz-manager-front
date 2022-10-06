import Vue from 'vue';
import VueI18n from 'vue-i18n';
import vuetify from '@/plugins/vuetify';
import InternalError from '@/components/unique/InternalError.vue';

function renderError(error: Error, i18n: VueI18n): void {
  const renderContext = {
    props: {
      error
    }
  };
  new Vue({
    vuetify,
    i18n,
    render: (h) => h(InternalError, renderContext)
  }).$mount('#app');
}

export { renderError };
