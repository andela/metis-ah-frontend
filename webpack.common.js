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
      Images: path.resolve(__dirname, 'src/static/images'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Components: path.resolve(__dirname, 'src/components'),
      Constants: path.resolve(__dirname, 'src/store/constants/'),
      Actions: path.resolve(__dirname, 'src/store/actions/'),
      Reducers: path.resolve(__dirname, 'src/store/reducers/')
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
