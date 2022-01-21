const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    // default mode
    mode: 'production',

    // entry point of the application
    entry: './src/index.js',

    // source-map: map the files to debug and identify errors
    devtool: 'source-map',

    // file name and path of the build
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'introduction-bundle.js'
    },

    // who and how to generate
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js','.jsx'],
    },

    // HTML Renderization Plugin
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filemame: './index.html'
        })
    ]
};