import request from '@/util/request';

export function login() {
  return request({
    url: '/api/post',
    method: 'post',
    data: { phone: '1202' },
  });
}
