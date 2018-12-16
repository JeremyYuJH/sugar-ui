const path = require('path')
const webpackBaseConfig = require('./base.config.js')
const merge = require('webpack-merge');
webpackBaseConfig.plugins.push(
)
module.exports = merge(webpackBaseConfig, {
    // entry: {
    //     sugar: './src/index.js'
    // },
    output: {
        path:path.resolve(__dirname, '../../lib'),
        filename: 'sugar.min.js',
        library: 'sugar',
        libraryTarget: 'umd'
    },
    mode: "production"
})
