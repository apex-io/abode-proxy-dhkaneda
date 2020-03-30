/* eslint-disable no-console */
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 5001;

app.use('/properties', createProxyMiddleware({ target: 'http://3.101.38.144', changeOrigin: true }));
app.use('/exampleHomeSummary/', createProxyMiddleware({ target: 'http://13.59.246.108/', changeOrigin: true }));
app.use('/api/neighborhoods', createProxyMiddleware({ target: 'http://54.151.36.136/', changeOrigin: true }));
app.use('/api/houses', createProxyMiddleware({ target: 'http://54.151.36.136/', changeOrigin: true }));
app.use('/api/gethomepictures', createProxyMiddleware({ target: 'http://18.222.201.225', changeOrigin: true }));


app.listen(port, () => {
  console.log(`Proxy is listening on ${port}`);
});

app.use(express.static('./dist'));
