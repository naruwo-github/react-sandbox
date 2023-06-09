const path = require('path')

module.exports = {
	mode: 'development', // 'production' | 'development' | 'none'
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'swc-loader',
						options: {
							jsc: {
								parser: {
									syntax: 'typescript',
									tsx: true
								},
								target: 'es2015'
							},
							env: {
								targets: {
									browsers: ['last 2 versions', 'safari >= 7', 'IE 11']
								}
							}
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: /\.module\.\w+$/i,
								localIdentName: '[local]__[hash:base64:5]'
							}
						}
					},
					'sass-loader'
				]
			}
		]
	}
};