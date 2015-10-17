module.exports = function (gulp, plugins) {
	gulp.task('syncAssets', function(cb) {
		plugins.sequence(
			// 'jst:dev',
			// 'images',
			// 'less:dev',
			// 'sync:dev',
			// 'coffee:dev',
			'compileAssets',
			'webpack',
			'images',
			'linkAssets',
			cb
		);
	});
};
