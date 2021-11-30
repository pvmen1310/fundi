// Webpack Common Configuration

const Path = require('path');
const Extract = require('mini-css-extract-plugin');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    webpack: function (config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
    },)
      return config
    }
  })

module.exports = withSass({
    context: Path.resolve(__dirname, 'source'),
    entry: {
        app: ['babel-polyfill', './app.js'],
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: Path.resolve(__dirname, 'public'),
        publicPath: '/',
        chunkFilename: 'js/[id].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 100000,
                    name: '[name].[ext]'
                  }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: Extract.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            minimize: true,
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [
                                Path.resolve(__dirname, 'node_modules'),
                                Path.resolve(__dirname, 'source/stylesheets'),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            svgo: {
                                plugins: [
                                    {
                                        cleanupIDs: {
                                            prefix: {
                                                toString() {
                                                    this.counter = this.counter || 0;
                                                    return `id-${this.counter++}`;
                                                },
                                            },
                                        },
                                    },
                                ],
                                floatPrecision: 2,
                            },
                            jsx: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Assets: Path.resolve(__dirname, 'source/assets'),
            Components: Path.resolve(__dirname, 'source/components'),
            Containers: Path.resolve(__dirname, 'source/containers'),
            Stylesheets: Path.resolve(__dirname, 'source/stylesheets'),
            API: Path.resolve(__dirname, 'source/api'),
        },
        modules: ['node_modules', 'source'],
    },
});
