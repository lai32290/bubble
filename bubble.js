var gulp = require('gulp');

const tasks = {
	copy: require('./tasks/copy.js')
	, 'gulp-clean': require('./tasks/gulp-clean.js')
	, 'gulp-stylus': require('./tasks/gulp-stylus.js')
	, 'gulp-include': require('./tasks/gulp-include.js')
	, watch: require('./tasks/watch.js')
};

module.exports = tasks;