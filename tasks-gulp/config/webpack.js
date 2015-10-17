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
 var webpackConfig = require("../../webpack.config.js");
module.exports = function(gulp, plugins, growl) {
	gulp.task('webpack', function(cb) {

    var myConfig = Object.create(webpackConfig);
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
          errorDetails : true
        }));
        cb();
    });
	});
};
