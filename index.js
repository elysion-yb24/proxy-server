const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://micro.sobhagya.in',
  changeOrigin: true,
  cookieDomainRewrite: {
    // rewrite cookies for localhost
    "micro.baaten.in": "localhost",
    ".baaten.in":"localhost",
    "micro.sobhgaya.in": "localhost",
    ".sobhagya.in":"localhost",
  }
}));

app.listen(8001, () => console.log('Proxy running on http://localhost:8001'));
