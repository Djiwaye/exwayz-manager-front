export default {
  api: {
    protocol: process.env.VUE_APP_API_PROTOCOL || undefined,
    hostname: process.env.VUE_APP_API_HOSTNAME || undefined,
    port: process.env.VUE_APP_API_PORT || undefined,
    url:
      process.env.VUE_APP_API_PROTOCOL && process.env.VUE_APP_API_HOSTNAME && process.env.VUE_APP_API_PORT
        ? `${process.env.VUE_APP_API_PROTOCOL}://${process.env.VUE_APP_API_HOSTNAME}:${process.env.VUE_APP_API_PORT}/`
        : '',
    endpoints: {
      commands: process.env.VUE_APP_ENDPOINT_COMMANDS || '/commands',
      status: process.env.VUE_APP_ENDPOINT_STATUS || '/status'
    }
  }
} as AppConfig;

export interface AppConfig {
  api: {
    protocol?: string;
    hostname?: string;
    port?: string;
    url: string;
    privateEndpointsPrefix: string;
    endpoints: {
      commands: string;
      status: string;
    };
  };
}
