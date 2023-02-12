import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        name: 'name',
      },
    }),
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: () => ({
      code: 1,
      data: {
        userRoles: ['admin', 'b'],
        token: 'na',
      },
    }),
  },
] as MockMethod[];
