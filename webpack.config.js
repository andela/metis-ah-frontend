const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
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
      test: /\.s?css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            autoprefixer({
              browsers: ['>1%', 'last 2 versions']
            })
          ]
        }
      },
      {
        loader: 'sass-loader'
      }
      ]
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
