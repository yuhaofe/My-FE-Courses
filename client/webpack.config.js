const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({ template: 'public/index.html' }),
    ]
}