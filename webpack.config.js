var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.html$/,
        include: APP_DIR,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', 
            {
              loader: 'postcss-loader',
              options: { plugins: [require('autoprefixer')({ browsers: ['last 2 versions'] })] }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.html'
    }),
    new ExtractTextPlugin('main.css'),
  ]
};

module.exports = config;
