const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }

        ]
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 8080,
        hot: true,
        open: true,
        overlay: true
    },

}