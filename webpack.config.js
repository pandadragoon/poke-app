var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

var config = {
  //update browser on change and write build.js
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/Main.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: SRC_PATH
      }
    ],
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: [/node_modules/, /test/],
      loaders: ['react-hot', 'babel']
    },
    {
        test   : /\.(scss|css)$/,
        loaders: ['style', 'css', 'autoprefixer-loader', 'sass?sourceMap']
    },
    {
      test: /\.(png|jpg|svg|woff|ttf|eot|otf|gif)$/,
      loader: 'url-loader?limit=200000'
    },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

}

module.exports = config;
