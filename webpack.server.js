const path = require('path')
const nodeExternals = require('webpack-node-externals')
// server webpack
module.exports = {
    target: 'node',
    mode: 'development',
    entry: './server/index.js',
    externals: [nodeExternals()],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
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
            }
        ]
    }
}