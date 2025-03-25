const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
    next();
  });
};