const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const plugins = require('./webpackUtils/plugins');
//变量配置工具类
const variable = require('./webpackUtils/variable');
const { DIST_PATH, SRC_PATH } = variable;

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: DIST_PATH,
        publicPath: '/',
        filename: 'bundlejs/[name].bundle.js',
        chunkFilename: 'bundlejs/[name].chunk.js',
        clean: true,
        asyncChunks: true,
    },
    resolve: {
        alias: {
            '@': SRC_PATH,
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        mainFiles: ['index'],
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|webp|svg|ico)$/,
                type: 'asset',
                generator: {
                    filename: 'assets/images/[name].[contenthash:8][ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                    },
                },
                exclude: [/node_modules/, /public/],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[contenthash:8][ext]',
                },
                exclude: [/node_modules/, /public/],
            },
            {
                test: /\.(tsx?|js)$/,
                include: [SRC_PATH],
                use: [
                    {
                        loader: 'babel-loader', // 这是一个webpack优化点，使用缓存
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
                exclude: [/node_modules/, /public/, /(.|_)min\.js$/],
            },
            {
                test: /\.(le|c)ss$/,
                exclude: [/node_modules/, /public/],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: { localIdentName: '[local]___[hash:base64:5]' },
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin(), '...'],
    },
    plugins: plugins.getPlugins(),
};
