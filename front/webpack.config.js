var webpack = require('webpack');

module.exports = {
    entry:  './src/index.js',
    output: {
        path: './static',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};