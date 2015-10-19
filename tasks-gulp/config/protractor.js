/**
 * End to End testing
 *
 * ---------------------------------------------------------------
 *
 * This gulp task will run the protractor tests
 *
 */

  var gutil = require('gulp-util')
   protractor = require('gulp-protractor').protractor,
   webdriver_standalone = require('gulp-protractor').webdriver_standalone,
   webdriver_update = require('gulp-protractor').webdriver_update;
module.exports = function(gulp, plugins, growl) {
	gulp.task('e2e', function(cb) {
    gulp.src(["./tests/*.specs.js"])
        .pipe(protractor({
            configFile: "./protractor.config.js",
            args: ['--baseUrl', 'http://localhost:1337']
        }))
        .on('error', function(e) { throw e })
        cb();
	});
};
