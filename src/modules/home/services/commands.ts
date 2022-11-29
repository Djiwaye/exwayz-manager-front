import axios, { AxiosPromise } from 'axios';
import appConfig from '@/config';

const commandsEndpoint = `${appConfig.api.url}${appConfig.api.endpoints.commands}`;

export function startSlam(): AxiosPromise<string[]> {
  const resource = `${commandsEndpoint}/start`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function stopSlam(): AxiosPromise<string> {
  const resource = `${commandsEndpoint}/stop`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function startMap(mapName: string): AxiosPromise<string[]> {
  const resource = `${commandsEndpoint}/map_start/${mapName}`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function stopMap(): AxiosPromise<string[]> {
  const resource = `${commandsEndpoint}/map_stop`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function mapLoad(mapName: string): AxiosPromise<string[]> {
  const resource = `${commandsEndpoint}/load_map/${mapName}`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function mapDelete(mapName: string): AxiosPromise<string[]> {
  const resource = `${commandsEndpoint}/delete_map/${mapName}`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function startReloc(): AxiosPromise<string> {
  const resource = `${commandsEndpoint}/reloc_start`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function stopReloc(): AxiosPromise<string[]> {
  const resource = `${commandsEndpoint}/reloc_stop`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function initReloc(x: string, y: string, z: string, angle: string): AxiosPromise<string> {
  const resource = `${commandsEndpoint}/reloc_initialize?x=${x}&y=${y}&z=${z}&angle=${angle}`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}

export function setProfile(state: string, profile: string): AxiosPromise<string> {
  const resource = `${commandsEndpoint}/set_profile?state=${state}&profile=${profile}`;
  return axios.get(resource, {
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });
}
