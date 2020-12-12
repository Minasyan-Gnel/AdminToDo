const webpackCommon = require('./webpack/webpack.common');
const webpackDev = require('./webpack/webpack.dev');
const webpackProd = require('./webpack/webpack.prod');
const { merge } = require('webpack-merge');

const devMode = process.env.NODE_ENV !== 'production';
const config = devMode ? webpackDev : webpackProd;

module.exports = merge(webpackCommon, config);
