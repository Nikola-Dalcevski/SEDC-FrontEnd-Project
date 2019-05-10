var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: __dirname + '/build',
    filename: "app.all.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  watch: true,
  mode: 'none'
};