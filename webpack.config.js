const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/views/index.html',
    appMountId: 'app',
    mobile: true,
  }),
];
if (process.env.NODE_ENV === 'development') {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  context: __dirname,
  mode: process.env.NODE_ENV,
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins,
};
