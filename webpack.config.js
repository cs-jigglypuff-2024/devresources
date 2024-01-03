const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    host: '0.0.0.0',
    // port: 8080 by default
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    proxy: {
      // list every endpoint
      '/search/*': 'http://localhost:3000',
      '/search/tag': 'http://localhost:3000',
      '/resources': 'http://localhost:3000',
      '/callback': 'http://localhost:3000'
      '/newResource': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /.(css|scss)$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // order reads right to left (turns sass files to css to style string)
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './app/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // these files can be imported without specifying extension
  },
};
