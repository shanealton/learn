var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
                presets: ['react', 'es2015']
            }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
