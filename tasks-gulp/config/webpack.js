/**
 * Generates the Webpack modules
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to generate the script modules using Webpack
 *
 */

 var webpack = require("webpack");
 var gutil = require('gulp-util');
 var path = require("path");
module.exports = function(gulp, plugins, growl) {
	gulp.task('webpack', function(cb) {
    webpack({
      entry: 'app',
      output: {
        path: "./.tmp/public/",
        filename: "bundle.js"
      },
      module: {
          loaders: [
              { test: /\.js$/, exclude: /node_modules|bower/, loaders: ['babel-loader'] },
          ]
      },
      resolve: {
         root: path.resolve('./assets/js/app/'),
         extensions: ['', '.js']
       }
      // Use this in combination with the watch option
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
          errorDetails : true
        }));
        cb();
    });
	});
};
