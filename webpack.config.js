const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './index.js',
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'dist',
    port: 8000
  },

  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }
    ]
  }
};
