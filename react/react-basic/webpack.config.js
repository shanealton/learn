module.exports = {
  entry: __dirname + '/src/js/client.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  }
};
