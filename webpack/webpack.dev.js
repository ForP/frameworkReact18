const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    mode: 'development',
    cache: { type: 'memory' }, //开发环境使用内存缓存
    devtool: 'eval-cheap-module-source-map',
    stats: 'errors-only',
    devServer: {
        open: true,
        hot: true,
        port: 3000,
        historyApiFallback: true,
    }
};

const mergedConfig = webpackMerge.merge(baseConfig, config);

module.exports = mergedConfig;