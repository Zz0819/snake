const path = require('path');

const webpackConfigs = {
  entry: {
    app: ['./main.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

module.exports = webpackConfigs;
