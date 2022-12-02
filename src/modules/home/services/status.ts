import axios, { AxiosPromise } from 'axios';
import appConfig from '@/config';
import { ProfileOptions } from '@/modules/home/models/dto/profileOptions';

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

export function availableProfilesOptions(): AxiosPromise<ProfileOptions[]> {
  const resource = `${statusEndpoint}/available_profiles_options`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function availableProfiles(): AxiosPromise<string[]> {
  const resource = `${statusEndpoint}/available_profiles`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function availableStates(): AxiosPromise<string[]> {
  const resource = `${statusEndpoint}/available_states`;
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
