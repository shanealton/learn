var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: __dirname + '/src/js/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  }
};
