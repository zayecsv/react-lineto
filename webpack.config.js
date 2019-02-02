'use strict';

var webpack = require('webpack');
var path = require('path');

var outputPath = path.join(__dirname, 'dist');

var config = {
    entry: './src/index.jsx',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'eslint-loader',
            },
        ]
    },

    externals: [
        'prop-types',
        'react'
    ]
};

module.exports = [
    Object.assign({}, config, {
        output: {
            path: outputPath,
            filename: 'react-lineto.js',
            library: 'react-lineto',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    }),
    Object.assign({}, config, {
        output: {
            path: outputPath,
            filename: 'react-lineto.min.js',
            library: 'react-lineto',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    })
];
