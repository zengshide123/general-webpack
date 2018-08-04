const webpack = require('webpack') ;
const path  = require('path') ;
const HtmlWebpackPlugin = require('html-webpack-plugin') ;

module.exports = {
    mode: 'production',
    entry:"./index.js",
    output: {
         filename: 'bundle.js',
         path: __dirname+'/dist',
         publicPath: ""
    },
      resolve: {
          alias: {
              '@':path.resolve(__dirname,'src')  
          }
      },
    module: {
         rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
            },
             {
                 test: /\.less$/,
                 use: [{
                     loader: "style-loader" 
                 }, {
                     loader: "css-loader",
                     options: {
                         importLoaders: 2,
                     }
                     }, 
                     {
                         loader: 'postcss-loader'
                     }, 
                   {
                     loader: "less-loader" 
                 }]
             },
             {
                test: /\.scss$/,
                use: [
                         {
                             loader: "style-loader" 
                         }, 
                         {
                             loader: "css-loader",
                            options: {
                                importLoaders: 2,
                            }
                            }, {
                                loader: 'postcss-loader'
                            },
                         {
                             loader: "sass-loader" 
                         }
                     ]
            },
             {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['babel/preset-env']
                    }
                }
             },
             {
                test: /\.txt$/,
                use: 'raw-loader'
            },
             {
                 test: /\.(png|jpg|gif)$/,
                 use: [
                     {
                     loader: 'url-loader',
                     options: {
                         limit: 8192
                     }
                 }
                ]
             },
              {
                  test: /\.json$/,
                  use: 'json-loader'
              },
         ]
    },
    optimization:{
        minimize:true
    },
    devServer: {
          proxy: { 
              '/api': 'http://localhost:3000'
          },
          contentBase: path.join(__dirname, 'dist'), 
          compress: true,
          historyApiFallback: true, 
          hot: true, 
          https: false, 
          noInfo: true,
          port:3000,
          overlay: true,
          inline:true,
          open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname+'/src/index.html',
            filename:'index.html',
            inject:'body',
            minify:{
                removeTagWhitespace:true,
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}