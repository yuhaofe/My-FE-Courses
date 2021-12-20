const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const EslintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new EslintWebpackPlugin({
      fix: true,
      extensions: ['js', 'vue'],
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.vue', '.js', '.json'],
  },
  devtool: 'source-map',
}
