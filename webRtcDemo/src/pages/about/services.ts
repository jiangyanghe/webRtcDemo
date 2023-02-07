import { request } from 'wdmjs';

/**
 * 获取当前用户GET
 * @param opts
 */
export async function aboutUser(opts?: Record<string, any>) {
  return request('/api/users', {
    method: 'GET',
    ...(opts || {}),
  });
}
