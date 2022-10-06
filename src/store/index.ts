import Vue from 'vue';
import Vuex from 'vuex';
import { home } from '@/modules/home/store';

Vue.use(Vuex);

function getState() {
  // eslint-disable-next-line
  return {} as any;
}

export default new Vuex.Store({
  state: getState(),
  mutations: {
    clearState: (): void => {
      home.mutations.clearState(home.state);
    }
  },
  modules: { home }
});
