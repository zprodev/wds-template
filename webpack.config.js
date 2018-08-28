const path = require('path');

module.exports = {
  entry: [
    path.resolve('src', 'index.js')
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage',
              targets: {
                node: 'current',
                browsers: 'last 2 versions'
              }
            }]
          ]
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
    open: true,
    contentBase: path.resolve('dist'),
    watchContentBase: true
  }
};
