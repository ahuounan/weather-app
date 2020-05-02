const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        include: /src/,
        options: { cacheDirectory: true }
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  entry: path.join(__dirname, 'src', '/index.tsx'),
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.EnvironmentPlugin({ ...process.env }),
    new HtmlWebpackPlugin({
      title: 'Weather App',
      filename: './index.html', //relative to root of the application
      template: './index.html'
    })
  ]
};
