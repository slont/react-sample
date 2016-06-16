var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: {
    'index': './views/entry.js',
    'top/index': './views/top/entry.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};