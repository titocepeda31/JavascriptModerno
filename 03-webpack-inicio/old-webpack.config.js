//const resolve = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry:"./index.js",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:"[name].[contenthash].js",
        publicPath:"",
    },
    mode:"production",
    module:{
        rules : [
            {
                use:"babel-loader",
                test:/.(js | jsx)$/,
                exclude: /node_modules/
            },
            {
                use:["style-loader","css-loader","sass-loader"],
                test : /.(css|sass|scss)$/,
            },
            {
                type:"asset",
                test:/\.(png|svg|jps|jpeg|gif)$/i,
            }
        ],
    },
    resolve:{
        extensions:[".js",".jsx",".json"],
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./index.html",
        })

    ]
};