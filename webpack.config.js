const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
        exclude: /node_modules/,
      },
      { test: /\.s?css$/, use: 'css-loader' },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './src/static/'),
    port: 3500,
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/static/index.html',
    filename: 'index.html',
    inject: 'body'
  })],
};
