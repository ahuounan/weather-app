const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

require('dotenv').config();

module.exports = {
  resolve: {
    extensions: ['.css', '.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules']
  },
  entry: path.join(__dirname, 'src', '/index.tsx'),
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.join(__dirname, 'dist')
  },
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        loader: 'babel-loader',
        include: /src/,
        options: { cacheDirectory: true }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({ ...process.env }),
    new HtmlWebpackPlugin({
      title: 'Weather App',
      filename: './index.html', //relative to root of the application
      template: './index.html'
    }),
    new CompressionPlugin()
  ]
};
