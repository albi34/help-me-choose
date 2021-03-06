/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 *
 */

livereload = require('gulp-livereload');
module.exports = function(gulp, plugins, growl) {
	livereload.listen(35733);
	gulp.task('watch:api', function() {
		// Watch Style files
		return gulp.watch('api/**/*', ['syncAssets'])
				.on('change', livereload.changed);
	});

	gulp.task('watch:assets', function() {
		// Watch assets
		return gulp.watch(['assets/**/*', 'tasks-gulp/pipeline.js'], ['syncAssets'])
				.on('change', livereload.changed);
	});

};
