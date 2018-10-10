const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
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
      exclude: /node_modules/,
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
      Pages: path.resolve(__dirname, 'src/pages/')
    }
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/static/index.html',
    filename: 'index.html',
    inject: 'body'
  }),
  new CompressionPlugin()
  ]
};
