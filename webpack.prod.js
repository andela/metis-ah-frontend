const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
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
      }
    ]
  },
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   extractComments: 'all'
      // }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
    })
  ]
});
