import axios, { AxiosProxyConfig } from 'axios';

const config: AxiosProxyConfig = {
  host: '127.0,.0.1',
  port: 8081
}

const _axios = axios.create(config)

export default _axios;
