/* eslint-disable */

import { capitalize } from './capitalize';

/**
 * Generate store setters that will be used as mutations.
 *
 * This is basic variable set.
 */
export default (object: any) => {
  const stateKeys = Object.keys(object) as string[];
  const setters: any = {};

  for (const key of stateKeys) {
    setters['set' + capitalize(key)] = (state: any, value: any) => {
      state[key] = value;
    };
  }

  return setters;
};
