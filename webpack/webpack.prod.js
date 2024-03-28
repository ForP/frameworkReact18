const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    mode: 'production',
    output: {
        filename: 'bundlejs/[name].[contenthash:8].js',
        chunkFilename: 'bundlejs/[name].[contenthash:8].async.js',
    },
    cache: { type: 'filesystem', buildDependencies: { config: [__filename] } }, //使用文件缓存
    // devtool: 'hidden-source-map',
    optimization: {
        minimize: true, //开启压缩
        moduleIds: 'deterministic', //单独模块id，模块内容变化再更新
        splitChunks: {
            chunks: 'all', // 匹配的块的类型：initial（初始块），async（按需加载的异步块），all（所有块）
            automaticNameDelimiter: '-',
            cacheGroups: {
                // 项目第三方组件
                vendor: {
                    name: 'vendors',
                    enforce: true, // ignore splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                // 项目第三方组件axios
                axios: {
                    name: 'axios',
                    enforce: true,
                    test: /[\\/]axios[\\/]/,
                    priority: -9,
                },
                // 项目公共组件
                default: {
                    minSize: 2000, // 分离后的最小块文件大小默认3000
                    name: 'common', // 用以控制分离后代码块的命名
                    minChunks: 2, // 最小共用次数
                    priority: -20, // 优先级，多个分组冲突时决定把代码放在哪块
                    reuseExistingChunk: true,
                },
            },
        },
    },
};

const mergedConfig = webpackMerge.merge(baseConfig, config);
module.exports = mergedConfig;
