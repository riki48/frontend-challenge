const path = require('path')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const HTMLWebPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractionPlugin = require('mini-css-extract-plugin')
const Webpack = require('webpack')


const isDev = process.env.NODE_ENV === "development";
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if(!isDev) config.minimizer = [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin()
    ]
    return config
}
const cssLoaders = (extra) => {
    const config = [
        {
            loader: MiniCssExtractionPlugin.loader,
        },
        'css-loader'
    ]
    if(extra) config.push(extra)
    return config;
}
module.exports = {
    // context: path.resolve(__dirname, 'src'),
    mode: !isDev? "development": "production",
    entry:{
        main: ["@babel/polyfill", "./src/index.js"]
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, 'dist')   
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', "tsx", "ts"],
    },
    optimization: optimization(),
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true
    },
    devtool: "source-map",
    plugins: [
        new HTMLWebPlugin({template: './public/index.html', minify: {collapseWhitespace: !isDev}}),
        new CleanWebpackPlugin(),
        new MiniCssExtractionPlugin({filename: "[name].css"}),
      //  new Webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env'],
                    cacheDirectory: true
                  }
                }
              },
            {
                test: /\.(css)$/,
                use: cssLoaders(),
            // exclude: /\.module\.css$/
            },
        
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/, // background не загружался
                type: "asset/resource"
               // use: ['file-loader']
            },
            {
                test: /\.(ttf|voff|voff2|eot)$/,
                use: ['file-loader'],
                type: "asset/resource"
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-typescript','@babel/preset-env']
                    }
                }
            },
            {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                presets: ['@babel/preset-react','@babel/preset-env'],
                cacheDirectory: true
                }
            }
        }
     ]
    }
}