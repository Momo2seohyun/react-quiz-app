var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './public/favicon.ico',
            filename: 'index.html',
            template: './public/index.html',
        })
    ],
    module: {
        rules: [{
            test: /.js?$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        ['es2015', { modules: false }],
                        'react',
                    ],
                    plugins: ['react-hot-loader/babel'],
                }
            }]
        }, {
            test: /\.(css|scss|sass)$/,
            loader: 'style-loader!css-loader!sass-loader',
        }]
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true
    }
};