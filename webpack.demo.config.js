'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './demo/index.jsx',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules|dist/,
                loader: 'eslint-loader',
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        host: '0.0.0.0',
        port: 4567,
        contentBase: path.join(__dirname, 'demo'),
    },
};
