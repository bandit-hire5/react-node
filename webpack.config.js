global.Promise         = require('bluebird');

var webpack            = require('webpack');
var path               = require('path');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin   = require("uglifyjs-webpack-plugin");

var publicPath         = 'http://localhost:8050/public/assets';
var cssName            = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
var jsName             = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }
    }),
    new ExtractTextPlugin(cssName),
    new webpack.LoaderOptionsPlugin({
        debug: process.env.NODE_ENV !== 'production',
        /*eslint: {
            configFile: '.eslintrc'
        },*/
    })
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new CleanWebpackPlugin(['public/assets/'], {
            root: __dirname,
            verbose: true,
            dry: false,
        })
    );
    //plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}

module.exports = {
    entry: ['babel-polyfill', './src/client.js'],

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            }),
        ],
    },

    plugins,

    output: {
        path: `${__dirname}/public/assets/`,
        filename: jsName,
        publicPath,
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: process.env.NODE_ENV !== 'production' ? 'babel-loader' : 'babel-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
                exclude: [/node_modules/],
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
            },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
            { test: /\.json$/, loader: 'json-loader' },
        ],
    },

    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,

    devServer: {
        headers: {'Access-Control-Allow-Origin': '*'},
    }
};