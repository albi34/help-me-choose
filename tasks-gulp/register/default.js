module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
			'compileAssets',
			'webpack',
			['images', 'linkAssets'],
			['watch:api', 'watch:assets'],
			cb
		);
	});
};
