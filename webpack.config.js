var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '/js/main.js'
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
            loader: 'url-loader?limit=100000'
        }]
    }
};
