import { cookie } from '@iyunbao/utils';

import dev from '../config/env/dev';
import test from '../config/env/test';
import pre from '../config/env/pre';
import prd from '../config/env/prd';

const configs: Record<string, any> = {
  dev: { ...dev },
  test: { ...test },
  pre: { ...pre },
  prd: { ...prd },
};
const root: Record<string, any> = typeof window !== 'undefined' ? window : {};

const list = ['dev', 'test', 'pre', 'prd'];
let env: string = __DEVELOPMENT__ ? list[0] : list[3];

// 服务端
if (__SERVER__) {
  env = __ENV__;
// get window._e
} else if (typeof root._e !== 'undefined') {
  env = list[root._e];
} else {
  // cookie _e
  env = list[cookie.get('_e')] || env;
}

// 获取环境
export const getEnv = () => {
  return env;
};

const config = configs[env];

export default config;
