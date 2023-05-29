// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const webpackConfig = require('../../webpack.config.js');
// const http = require('http');
// const compiler = webpack(webpackConfig);
// const devServerOptions = { ...webpackConfig.devServer, open: true };
// const devServer = new WebpackDevServer(devServerOptions, compiler)//.start();
// const checkServerRunning = (callback) => {
//   http.get(`http://localhost:8080`, () => {
//     callback(true);
//   }).on('error', () => {
//     callback(false);
//   });
// };
// checkServerRunning(function(status) {
//   if(!status) devServer.start()
// })

const express = require('express');
const envConfig = require("dotenv").config();

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/', (req, res) => {
  res.send('welcome');
});

module.exports = app