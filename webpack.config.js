const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loaders: [
          'style-loader',
          'css-loader?&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js' }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 3000
  }
}

module.exports = config
