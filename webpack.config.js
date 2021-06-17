const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    mode: 'none',
    entry: {
      main: './src/index.js',
      login: './src/components/Auth/Login/Login.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      //filename: 'index_bundle.js',
      filename: (chunkData) => {
         return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
      },
      publicPath: '/'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      port: 3080,
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
        '/api/user': {
          target: 'http://localhost:3080',
          secure: true
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(scss)$/,
          use: [
             // fallback to style-loader in development
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(css)$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
         },
         {
            test: /\.(jpg|png|gif|svg|pdf)$/,
            use: {
               loader: 'file-loader',
               options: {
                  name:'[name].[ext]',
                  outputPath: path.resolve(__dirname, 'dist/images'),
                  publicPath: './client/public/images'

                }
            },
            exclude: /node_modules/
        },
        {
           test: /\.(csv|tsv)$/,
           use: 'csv-loader',
           exclude: /node_modules/
         },
         {
           test: /\.xml$/,
           use: 'xml-loader',
           exclude: /node_modules/
         },
         {
            test: /\.(jpg|png|gif|svg|pdf)$/,
            use: {
               loader: 'file-loader',
               options: {
                  name:'[name].[ext]',
                  outputPath: path.resolve(__dirname, 'dist/images'),
                  publicPath: './public/images'

                }
            }
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new LiveReloadPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),

       new MiniCssExtractPlugin({
           filename: "[name].css",
           chunkFilename: "[id].css"
       }),

       new CopyWebpackPlugin ([
         { from: path.resolve(__dirname, 'public/images'), to: 'images' }
       ])
    ]
  }
