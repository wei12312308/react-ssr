const path = require('path')
// client webpack
module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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