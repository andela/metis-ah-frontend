const path = require('path');
const autoprefixer = require('autoprefixer');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  module: {
    rules: [{
      test: /\.s?css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          // modules: true,
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
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './src/static/'),
    port: 3500,
    historyApiFallback: true
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});
