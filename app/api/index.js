const express = require('express');
const httpProxy = require('http-proxy');
const port = process.env.PORT || 4000
const apiProxy = httpProxy.createProxyServer();
const app = express();

apiProxy.on('error', (err, req, res) => {
  console.log(err);
  res.status(500).send('Proxy down :(');
});

app.all('/daily*', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:5000' });
});

app.listen(port, () => console.log(`Listening on port ${port}`))