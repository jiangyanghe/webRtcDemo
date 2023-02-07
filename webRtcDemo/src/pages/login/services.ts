import { request as wdmRequest } from 'wdmjs';

import request from '@/utils/request';

/**
 * 获取当前用户GET
 * @param opts
 */
export async function loginUser(): Promise<{ data: any }> {
  return request({
    path: '/sale/v4/view.json',
    server: 'iybapi',
    params: {
      wareId: '22551',
      accountId: '50003895001',
    },
    isLoading: true
  });
}

/**
 * 退出登录接口
 * @param opts
 */
 export async function outLogin(opts?: Record<string, any>) {
  return wdmRequest('/api/login/outLogin', {
    method: 'POST',
    server: 'api',
    ...(opts || {}),
  });
}
