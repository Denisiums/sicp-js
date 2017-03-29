'use strict';

module.exports = {
	entry: './js/all',
	output: {
		path: __dirname + '/compiled',
		filename: 'build.js'
	},

	watch: true,
	watchOptions: {
		aggregateTimeout: 300
	}
};