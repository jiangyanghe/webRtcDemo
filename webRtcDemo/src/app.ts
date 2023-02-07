import { matchRoutes } from 'wdmjs';
import type { RequestConfig } from 'wdmjs';
import { tools, statis, JSBridge } from '@iyunbao/utils';

import { errorHandler, requestMiddlewares, responseMiddlewares } from '@/utils/request';

// 请求插件配置
export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {
    errorHandler,
  },
  requestInterceptors: [requestMiddlewares],
  responseInterceptors: [responseMiddlewares],
};

// 定义初始化数据
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'wdmjs' };
}

// 第一次进入
let firstRoutePage = true;

// 在初始加载和路由切换时调用
export function onRouteChange({ clientRoutes, location }: any) {
  const { pathname } = location;
  // 前缀路由 base
  const basename = pathname.match(/^\/m/) ? pathname.match(/^\/(m)/)[0] : '';
  const route: any = matchRoutes(clientRoutes, pathname, basename)?.pop()?.route;

  // 设置页面标题
  if (route?.title) {
    JSBridge.ready(() => {
      JSBridge.setTitle(route?.title);
    });
  }

  // 进入页面统计
  statis.addPageStatis();

  if (firstRoutePage) {
    // 页面初始化
    tools.pageInit();
    firstRoutePage = false;
  }
}
