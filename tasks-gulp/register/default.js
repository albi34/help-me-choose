module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
			'webpack',
			'compileAssets',
			['images', 'linkAssets'],
			['watch:api', 'watch:assets'],
			cb
		);
	});
};
