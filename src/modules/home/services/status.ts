import axios, { AxiosPromise } from 'axios';
import appConfig from '@/config';

const statusEndpoint = `${appConfig.api.url}${appConfig.api.endpoints.status}`;

export function availableMaps(): AxiosPromise<string[]> {
  const resource = `${statusEndpoint}/available_maps`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function getManagerState(): AxiosPromise<string> {
  const resource = `${statusEndpoint}/state`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}
