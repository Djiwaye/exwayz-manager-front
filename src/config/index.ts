export default {
  api: {
    protocol: process.env.VUE_APP_API_PROTOCOL || 'http',
    hostname: process.env.VUE_APP_API_HOSTNAME || 'localhost',
    url: `${process.env.VUE_APP_API_PROTOCOL || 'http'}://${process.env.VUE_APP_API_HOSTNAME || 'localhost'}:${
      process.env.VUE_APP_API_PORT || 3000
    }`,
    endpoints: {
      commands: process.env.VUE_APP_ENDPOINT_COMMANDS || '/commands',
      status: process.env.VUE_APP_ENDPOINT_STATUS || '/status'
    }
  }
} as AppConfig;

export interface AppConfig {
  api: {
    protocol: string;
    hostname: string;
    url: string;
    privateEndpointsPrefix: string;
    endpoints: {
      commands: string;
      status: string;
    };
  };
}
