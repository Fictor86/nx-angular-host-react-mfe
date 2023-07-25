const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');

const webpackEntry = [
  path.resolve(__dirname, './src/index.html'),
  path.resolve(__dirname, './src/main.tsx'),
];

const webpackOutput = {
  publicPath: 'auto',
  path: path.resolve(__dirname, '../../dist/apps/http-mfe-react'),
};

const webpackModuleFederationPlugin = new ModuleFederationPlugin({
  name: 'http_mfe_react',
  library: { type: 'var', name: 'http_mfe_react' },
  filename: 'remoteEntry.js',
  exposes: {
    './web-components': path.resolve(__dirname, './src/bootstrap.tsx'),
  },
  shared: ['react', 'react-dom'],
});

const ruleForTsx = {
  test: /\.tsx$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/react', '@babel/env'],
      },
    },
  ],
};
const ruleForMisc = {
  test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
  use: ['file-loader'],
};
const ruleForHtml = {
  test: /\.html$/,
  use: ['file-loader?name=[name].[ext]'],
};
const ruleForStyles = {
  test: /\.(s[ac]ss|\.css)$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
};

const webpackRules = [ruleForTsx, ruleForMisc, ruleForHtml, ruleForStyles];

const webpackExtensions = ['.tsx', '.ts', '.js'];

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.entry = webpackEntry;
  config.output = webpackOutput;
  config.plugins.push(webpackModuleFederationPlugin);
  config.optimization.runtimeChunk = false; // Only needed to bypass a temporary bug
  config.module.rules = webpackRules;
  config.resolve.extensions = webpackExtensions;

  return config;
});
