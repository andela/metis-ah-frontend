const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
    },
    {
      test: /\.(jpe?g|gif|png)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css', '.scss'],
    alias: {
      Images: path.resolve(__dirname, 'src/static/images'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Components: path.resolve(__dirname, 'src/components'),
      Constants: path.resolve(__dirname, 'src/store/constants'),
      Atoms: path.resolve(__dirname, 'src/components/atoms'),
      Compounds: path.resolve(__dirname, 'src/components/compounds'),
      Utils: path.resolve(__dirname, 'src/util'),
      Actions: path.resolve(__dirname, 'src/store/actions'),
      Reducers: path.resolve(__dirname, 'src/store/reducers'),
      HOC: path.resolve(__dirname, 'src/components/HOC'),
      Store: path.resolve(__dirname, 'src/store')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/static/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CompressionPlugin(),
  ]
};
