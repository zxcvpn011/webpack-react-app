const path = require('path');
const WebpackObfuscator = require('webpack-obfuscator');
const envConfig = require("dotenv").config();
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/client/index.js'),
  ],
  devtool: 'cheap-module-source-map',
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.webpack-cache'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1,
            },
          },
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '.webpack-cache'),
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
                'react-refresh/babel',
              ],
            },
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'),
    // devMiddleware: {
    //   index: true,
    //   mimeTypes: { phtml: 'text/html' },
    //   publicPath: '/publicPathForDevServe',
    //   serverSideRender: true,
    //   writeToDisk: true,
    // },
    webSocketServer: 'ws',
    liveReload: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 3000,
    compress: true,
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'http://localhost'
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ]
};


if (process.env.NODE_ENV === 'production') {
  console.log('looks like we are in production mode..............');
  // config.plugins.push(
  //   new WebpackObfuscator({
  //     rotateStringArray: true,
  //     compact: true,
  //     controlFlowFlattening: true,
  //     controlFlowFlatteningThreshold: 1,
  //     numbersToExpressions: true,
  //     simplify: true,
  //     stringArrayShuffle: true,
  //     splitStrings: true,
  //     stringArrayThreshold: 1,
  //   }, ['excluded_bundle_name.js'])
  // )
} else {
  console.log('looks like we are in development mode.............');
}







module.exports = config