module.exports = {
	serverRuntimeConfig: {
		// Only available on server side
	},
	publicRuntimeConfig: {
		// Available on both server and client
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
					publicPath: './',
					outputPath: 'static/',
					name: '[name].[ext]'
				}
			}
		});

		config.module.rules.push({
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude(modulePath) {
				return /node_modules/.test(modulePath);
			},
			options: Object.assign({}, this.babelOptions)
		});

		return config;
	}
};
