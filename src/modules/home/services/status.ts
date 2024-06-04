import axios, { AxiosPromise } from 'axios';
import appConfig from '@/config';
import { ProfileOptions } from '@/modules/home/models/dto/profileOptions';
import { ProfileCurrent } from '@/modules/home/models/dto/profileCurrent';

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

export function allProfiles(): AxiosPromise<ProfileOptions[]> {
  const resource = `${statusEndpoint}/all_profiles`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function currentProfiles(): AxiosPromise<ProfileCurrent[]> {
  const resource = `${statusEndpoint}/current_profiles`;
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
