var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        bundle: './src/app.module.js',
        vendor: ['angular', 'angular-ui-router', 'angulartics', 'angulartics-google-analytics', 'lodash']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // Specify the common bundle's name.
        })
    ],
    devServer: {
        contentBase: false,
        port: 8080
    }
};