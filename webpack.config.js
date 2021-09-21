const path = require('path')
const pHtml=require('html-webpack-plugin')
const pCss=require('mini-css-extract-plugin')
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.html$/i,
                use: [{

                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
                ]
            },
            {
                test:/\.css$/i,
                use:[pCss.loader,"css-loader"]
            },
            {
                test:/\.(jpe?g|png|svg|gif)/i,
                use:['file-loader?name=asset/[name].[ext]']
            }
        ]
    },
    plugins:[
        new pHtml({
            template:'./src/index.html',
            filename:'./index.html'
        }),
        new pCss()
    ],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    }
}