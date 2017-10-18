const path = require('path');

module.exports = {
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve('node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules'
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 8000,
    contentBase: path.resolve('dist'),
    watchContentBase: true
  }
};
