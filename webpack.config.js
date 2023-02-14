const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: Path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"]
  },        
  module: { 
    rules: [{ 
      // config para compilador de JS Babel
      test: /\.m?js$/, 
      use: {loader: 'babel-loader'},
      exclude: /node_module/ },
      
      // config para el loader CSS
      {test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader,
        "css-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './node_modules/reveal.js/index.html',
      inject: true,
      filename: "index.html"
    }),
    new MiniCssExtractPlugin(),
  ],
  
};