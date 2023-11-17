const path = require('path');
// 非/根目录部署basename
const BASENAME = '/';
const NODE_ENV = process.env.NODE_ENV || 'dev';
//是否是产线环境
const IS_PRO = NODE_ENV === 'prod';
//是否是开发环境
const IS_DEV = NODE_ENV === 'dev';
//构建目录
const DIST_PATH = path.resolve(__dirname, '../../', 'dist');
//源码目录
const SRC_PATH = path.resolve(__dirname, '../../', 'src');
//public 目录
const PUBLIC_PATH = path.resolve(__dirname, '../../', 'public');

module.exports = {
    IS_PRO,
    IS_DEV,
    DIST_PATH,
    SRC_PATH,
    PUBLIC_PATH,
    BASENAME,
};
