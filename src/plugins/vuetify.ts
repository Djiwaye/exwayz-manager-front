import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: colors.teal.darken2,
        secondary: colors.teal.lighten2,
        tertiary: colors.grey.lighten4,
        accent: colors.orange.lighten2,
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        brown: colors.brown.base,
        grey: colors.grey.base,
        lime: colors.lime.base,
        pink: colors.pink.base,
        purple: colors.purple.base,
        red: colors.red.base,
        teal: colors.teal.base
      }
    }
  }
};

export default new Vuetify(opts);
