const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    'https://zora.cool:3002',
    createProxyMiddleware(
      {
        target: 'http://zora.cool:3002',//请求的真实地址
        changeOrigin: true
      })
  );
};
