var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    app: path.resolve(__dirname, 'src/main.jsx'),
    vendors: [
      'axios',
      'react',
      'alt',
      'underscore',
      'react-dom',
      'react-router',
      'history'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
          test   : /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader!sass?sourceMap')
      },
      {
      test: /\.gif$/,loaders: [
          "url-loader?limit=10000&mimetype=image/gif&name=assets/img/img-[hash:6].[ext]",
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.jpg$/, loaders: [
          "url-loader?limit=10000&mimetype=image/jpg&name=assets/img/img-[hash:6].[ext]",
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.png$/, loaders: [
          "url-loader?limit=10000&mimetype=image/png&name=assets/img/img-[hash:6].[ext]",
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml&name=assets/img/img-[hash:6].[ext]"
      },
      {
        test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1&name=assets/fonts/font-[hash:6].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new ExtractTextPlugin("styles.css")
  ]
};

module.exports = config;
