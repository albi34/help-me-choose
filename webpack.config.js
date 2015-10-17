var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		main: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server','app']
	},
	output: {
		path:  path.resolve("./.tmp/public/"),
		filename:  "bundle.js",
		publicPath: './.tmp/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
    root: path.resolve('./assets/js/app/')
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.jsx$/, loader: 'jsx'},
      { test: /\.js$/, exclude: /node_modules|bower/, loaders: ['babel-loader'] }
		]
	},
	externals: {
		'showdown': 'window.Showdown'
	}
};
