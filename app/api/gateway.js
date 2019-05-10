const express = require('express')
const httpProxy = require('http-proxy')
const apiProxy = httpProxy.createProxyServer()
const app = express()

apiProxy.on('error', (err, req, res) => {
  console.log(err)
  res.status(500).send('Proxy down :(')
})

app.all('/user*', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:9000' })
})

app.listen(4000)