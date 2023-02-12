//const path = require('path');

//module.exports = {
 // entry: './src/index.js',
  //output: {
    //filename: 'main.js',
    //path: path.resolve(__dirname, 'dist'),
  //}, };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
    //  path: path.join(__dirname, '/bundle'),
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
