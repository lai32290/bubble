var gulp = require('gulp');

const tasks = {
	copy: require('./bubble/copy.js')
	, 'gulp-clean': require('./bubble/gulp-clean.js')
	, 'gulp-stylus': require('./bubble/gulp-stylus.js')
	, 'gulp-include': require('./bubble/gulp-include.js')
	, watch: require('./bubble/watch.js')
};

module.exports = tasks;