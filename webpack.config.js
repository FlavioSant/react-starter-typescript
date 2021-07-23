const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv-safe');

const { required } = dotenv.config();

const htmlPlugin = new HtmlWebpackPlugin({
  favicon: join(__dirname, 'public', 'favicon.ico'),
  template: join(__dirname, 'public', 'index.html'),
});

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * @type {webpack.Configuration}
 */
module.exports = {
  entry: join(__dirname, 'src', 'index.tsx'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  performance: false,

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    htmlPlugin,
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: join(__dirname, 'tsconfig.json'),
      },
    }),
    new webpack.EnvironmentPlugin(required),
  ].filter(Boolean),

  devServer: {
    contentBase: join(__dirname, 'public'),
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 3000,
  },
};
