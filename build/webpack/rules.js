const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '../../', dir)
}
module.exports = [
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                scss: {
                    use: ['css-loader?minimize', { loader: 'postcss-loader', options: { sourceMap: true } }, 'sass-loader'],
                    fallback: "style-loader"
                },
                css: {
                    use: ['css-loader', { loader: 'postcss-loader', options: { sourceMap: true } }],
                    fallback: "style-loader"
                }
            }
        }
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [resolve('node_modules')]
    },
    {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }
]