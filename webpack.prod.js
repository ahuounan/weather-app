const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

require('dotenv').config();

module.exports = {
  mode: 'production',
  devtool: false,
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
    }),
    new CompressionPlugin({
      deleteOriginalAssets: true
    })
  ]
};
