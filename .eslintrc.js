module.exports = {
    root: true, // 指定了root为true，eslint只检查当前项目目录
    env: {
        // 提供预设的全局变量，避免eslint检查报错，例如window
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        // 继承eslint推荐的检查规则
        'eslint:recommended',
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        // 关闭 eslint 中所有不必要的或可能与 prettier 冲突的规则
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        "react",
        "react-hooks",
        '@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 'latest', // 指定ECMAScript 语法为最新
        sourceType: 'module', // 指定代码为 ECMAScript 模块
        ecmaFeatures: {
            jsx: true, // 启用jsx
        },
        project: './tsconfig.json',
    },
    rule: {
        'react/react-in-jsx-scope': 'off', // React17后不需要在jsx中主动引入react
        // 检查 Hooks 的使用规则
        "react-hooks/rules-of-hooks": "error", 
        // 检查useEffect/useCallback依赖项的声明
        "react-hooks/exhaustive-deps": "warn",
        'prettier/prettier': [
            'error',
            {
                singleAttributePerLine: false, // 不强制要求一个属性占一行
            }
        ]
    },
};