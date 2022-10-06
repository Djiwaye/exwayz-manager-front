/* eslint-disable */
import generateStoreSetters from '@/helpers/generateStoreSetters';
import { State, StateHome } from './state';
import { sleep } from '@/helpers/sleep';

const state = new State();

const store = {
  namespaced: true,
  state,
  mutations: {
    ...generateStoreSetters(state),
    clearState: (stateHome: StateHome): void => {}
  },
  actions: {
    waitForState(storeParam: any, waitingState: string): Promise<void> {
      storeParam.commit('setWaitingForManagerState', waitingState);
      return new Promise<void>(async (resolve, reject) => {
        for (
          let retry = 0;
          retry < 20 && storeParam.state.waitingForManagerState !== storeParam.state.currentManagerState;
          retry++
        ) {
          await sleep(1000);
        }
        if (storeParam.state.waitingForManagerState === waitingState) {
          resolve();
        } else {
          reject();
        }
        storeParam.commit('setWaitingForManagerState', null);
      });
    }
  },
  modules: {},
  getters: {}
};

export { store as home };
