const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        sideBar: './src/side-bar.js',
        All:'./src/All.js',
        cards:'./src/cards.js'
      },
       output: {
        filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         clean:true,
       },
       devtool: 'inline-source-map',
       devServer: {
        static: './dist',
      },
      optimization: {
        runtimeChunk: 'single',
      },
       plugins: [
        new HtmlWebpackPlugin({
          title: 'To-DO-List',
          template: 'dist/index.html',
          inject:'false'
        }),
      ],
 module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
   ],
 },
};