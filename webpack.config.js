const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry:'./src/main.jsx',
    output: {
       path: __dirname + "/dist",
       filename: './bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase: './dist'
    },
    resolve:{
        extensions:['','.js','.jsx'],
        alias:{
            modules: __dirname + '/node_modules'
        }
    },
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module:{
        loaders:[{
            test: /.jsx?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
            query:{
                presets:['es2015','react'],
                plugins:['transform-object-rest-spread','transform-class-properties','react-html-attrs']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader','css-loader') 
        },{
            test:/\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}