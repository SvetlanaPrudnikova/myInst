var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
        }],
        historyApiFallback: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
            }
        ],

        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}