const path = require('path');
const glob = require('glob');
const config = {
  entry: {
    main: glob.sync('./src/**/*.ts', {
      ignore: './src/**/*.d.ts',
    }),
    styles: './src/css/styles.scss',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html?$/,
        use: 'raw-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[c]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    compress: true,
  },
};
module.exports = (evn, argv) => {
  if (argv.mode === 'production') {
    delete config.devtool;
  }
  return config;
};
