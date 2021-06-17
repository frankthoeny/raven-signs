'use strict';

const path = require('path')
const port = (process.env.PORT || 8080)
const proxyPort = (process.env.PORT || 3080)
const Server = require('./server.js')
const app = Server.app()

// PROXY LISTENING //
app.listen(proxyPort, 'localhost' , (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Express Routes Listening on port ' + proxyPort );
});

// WEBPACK //
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  contentBase: path.resolve(__dirname, 'public'),
  hot: true,
  progress: true,
  inline: true,
  open: true,
  openPage: '',
  historyApiFallback: true,
  proxy:{
    '/api/agent': {
      target: 'http://localhost:3080',
      secure: true
    },
    '/api/auth': {
      target: 'http://localhost:3080',
      secure: true
    },
    '/api/book': {
      target: 'http://localhost:3080',
      secure: true
    },
    '/api/book/front/page': {
      target: 'http://localhost:3080',
      secure: false
    },
    '/api/client': {
      target: 'http://localhost:3080',
      secure: true
    },
    '/api/order': {
      target: 'http://localhost:3080',
      secure: true
    },
    '/api/user': {
      target: 'http://localhost:3080',
      secure: true
    }
  }
});

// DEV SERVER //
new WebpackDevServer(compiler, devServerOptions)
.listen(port, 'localhost' , (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:' + port );
});

// Start MONGODB
Server.db()
