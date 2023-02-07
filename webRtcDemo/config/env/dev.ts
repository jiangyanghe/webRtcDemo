export default {
  API: {
    api: {
      host: '/api',
    },
    iybapi: {
      host: '/iybapi',
    },
  },
  proxy: {
    '/api': {
      target: 'https://api-test.iyunbao.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      logLevel: 'debug',
    },
    '/iybapi': {
      target: 'https://api-test.iyb.tm',
      changeOrigin: true,
      pathRewrite: {
        '^/iybapi': '',
      },
      logLevel: 'debug',
    },
  },
};
