/**
 * Starts the Webpack Dev Server
 *
 * ---------------------------------------------------------------
 *
 * This gulp task will allow us to start the webpack dev server to benefit from all its nice features!
 *
 */

 var webpack = require("webpack");
 var gutil = require('gulp-util');
 var WebpackDevServer = require("webpack-dev-server");
 var webpackConfig = require("../../webpack.config.js");
 var path = require("path")
module.exports = function(gulp, plugins, growl) {
	gulp.task('webpack-dev-server', function(cb) {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;
    new WebpackDevServer(webpack(myConfig), {
      publicPath:  myConfig.output.publicPath,
      hot: true,
      stats: {
        colors: true
      },
      headers: { 'Access-Control-Allow-Origin': '*' }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
	});
};
