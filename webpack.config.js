var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		main: [  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true', 'index']
	},
	output: {
		path: "/",
		filename:  "bundle.js",
		publicPath:"http://localhost:1337/"
	},
	plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
