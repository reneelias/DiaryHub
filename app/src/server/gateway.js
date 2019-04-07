const express = require('express');
const cors = require('cors');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const app = express();

app.use(cors());

apiProxy.on('error', (err, req, res) => {
  console.log(err);
  res.status(500).send('Proxy down :(');
});



app.listen(4000);
