const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
// const webpack = require("webpack");

// module.exports = {
//   entry: {
//     src: "path/to/src"
//   },
//   output: {
//     path: "path/to/output",
//     publicPath: "/public",
//     chunkFilename: "[chunkhash:12].js",
//     filename: "[chunkhash:12].js"
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       "process.env.NODE_ENV": JSON.stringify("production")
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       output: {
//         comments: false
//       }
//     })
//   ],
//   resolve: {
//     extensions: [".js", ".jsx"]
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loader: "babel-loader",
//         include: ["path/to/src"]
//       },
//       {
//         test: /\.css$/,
//         loaders: ["style-loader", "css-loader"]
//       },
//       {
//         test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
//         loader: "file-loader?name=[hash:12].[ext]"
//       }
//     ]
//   }
// };

module.exports = withFonts(
  withCSS(
    withSass({
      // assetPrefix:
      //   'https://fonts.googleapis.com/css?family=Acme|Montserrat:400,700&display=swap',
      enableSvg: true,
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000000
            }
          }
        });
        // config.module.rules.push({
        //   test: /\.jsx?$/,
        //   use: {
        //     loader: "url-loader"
        //     // include: ["path/to/src"]
        //   }
        // });

        // @import url('https://fonts.googleapis.com/css?family=Acme|Montserrat:400,700&display=swap');

        return config;
      }
    })
  )
);
