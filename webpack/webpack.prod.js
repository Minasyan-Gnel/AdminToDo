const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(svg)(\?[a-z0-9]+)?$/,
        use: ['file-loader?name=./icons/[name]_[hash].[ext]'],
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2?)(\?[a-z0-9]+)?$/,
        use: ['file-loader?name=./fonts/[name]_[hash].[ext]'],
      },
      {
        test: /\.(gif|png|jpeg?)(\?[a-z0-9]+)?$/,
        use: ['file-loader?name=./images/[name]_[hash].[ext]'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [new TerserPlugin({
      exclude: /node_modules/,
      parallel: true,
      extractComments: true,
    })],
  },
};
