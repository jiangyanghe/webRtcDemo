import { request as wdmRequest } from 'wdmjs';
import { Loading, Toast } from 'zarm';

import { IUrlOpts, IPathOpts, IRequestOpts } from '@/types';
import rootConfig from '@/config';

const getMergeUrl = (opts: IRequestOpts) => {
  const serverOpts = opts as IPathOpts;
  const urlOpts = opts as IUrlOpts;
  let url = urlOpts?.url || '';

  if (serverOpts?.server) {
    const host = rootConfig.API[serverOpts.server] || '';

    if (host?.host) {
      url = `${host.host}${serverOpts.path || urlOpts.url}`;
    } else {
      url = serverOpts.path;
    }
  }

  return url;
};

// 请求报错事件
export function errorHandler(error: any) {
  const { config } = error;

  if (config?.isLoading) {
    Loading.hide();
  }
}

// request 中间件
// before 展示loading
export function requestMiddlewares(config: any) {
  const serverOpts = config as IPathOpts;

  if (config?.isLoading) {
    Loading.show({
      mask: false,
    });
  }

  if (serverOpts?.server) {
    const url = getMergeUrl(config);

    config.url = url;
  }

  return config;
}

// response 中间件
// after 响应包装
export function responseMiddlewares(response: any) {
  const { config, status, statusText } = response;

  if (config?.isLoading) {
    Loading.hide();
  }

  if (status >= 200 && status < 300) {
    return response;
  }

  Toast.show('系统异常，稍后再试');

  const error: any = new Error(statusText);
  error.response = response;

  return Promise.reject(error);
}

export default function request(opts: any) {
  const {
    path,
    url,
    ...rest
  } = opts || {};

  return wdmRequest(path || url, rest);
}
