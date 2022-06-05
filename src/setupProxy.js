const proxy = require('http-proxy-middleware');
const createProxyMiddleware = proxy;
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/zora', {
      target: 'http://localhost:3002',//请求的真实地址
      changeOrigin: true,
      pathRewrite: {
        '/zora': ''
      }
    })
  );
};
