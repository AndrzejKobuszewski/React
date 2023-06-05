const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {

  entry: "./src/index.js",
 // technologies: "./src/Technologies.js",
 //mode:'development',
 //entry:{
 //index:"./src/index.js",
 //technologies:"./src/Technologies.js"
 //},
  output: {
  filename: "main.js",
 // filename: "main.bundle.js",
    path: path.resolve(__dirname, "build"),
    
    publicPath: '',
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
 
 
  //historyApiFallback: true,
 
 
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[contenthash].[ext]",
          outputPath: "static/assets/",
          publicPath: "static/assets/",
          postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".*", ".js", ".jsx"],
  },
 //   optimization: {
  // . splitChunks: {
  //    chunks: "all",
  //  },
 // },

};

