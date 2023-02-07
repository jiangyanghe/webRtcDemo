import { defineConfig } from 'wdmjs';

import routes from './routes';
import configDev from './env/dev';

export default defineConfig({
  proxy: configDev.proxy,
  switchCli: 'h5',
  zarm: {
    configProvider: {
      primaryColor: '#057aff',
    },
  },
  model: {},
  request: {},
  initialState: {},
  base: '/m',
  // 兼容低版本浏览器 Android 5 / IOS 8
  legacy: {},
  iybUtils: {},
  iybComponents: {},
  routes,
});
