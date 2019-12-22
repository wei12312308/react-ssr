const path = require('path')
const webpackHtmlPlugin = require('webpack-html-plugin')
// client webpack
module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new webpackHtmlPlugin({
            filename: 'index.csr.html',
            template: 'src/index.csr.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                // 支持jsx
                loader: 'babel-loader',
                exclude: /node-modules/,
                // 编译级别
                options: {
                    presets: ['@babel/preset-react', ['@babel/preset-env']]
                }
            },
            {
                test: /\.css$/,
                use: ['isomorphic-style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    }
}