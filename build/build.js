var path = require('path')
var fs = require('fs')
var ora = require('ora')
var webpack = require('webpack')
var webpackPublishConfig = require('./webpack/publish.config.js')
const merge = require('webpack-merge');

function start() {
    let componentsPath = path.join(__dirname, '../src/components');
    let modules = {};
    files = fs.readdirSync(componentsPath)
    files.map((name) => {
        let p = path.join(componentsPath, name);
        fs.statSync(p).isDirectory() && (modules[name] = p + '/index.js')
    })

    let webpackConfig = merge(webpackPublishConfig, {
        entry: modules,
        output: {
            path: path.resolve(__dirname, '../library'),
            filename: '[name]/index.js',
            library: 'sugar',
            libraryTarget: 'umd'
        }
    })

    var spinner = ora('building...')
    spinner.start()
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) {
            throw err
        }
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
    })
}

start();