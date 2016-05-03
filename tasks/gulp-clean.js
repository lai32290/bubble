const config = require('./bubble-config.js')
	, tasks = config.tasks
	, gulp = require('gulp')
	, notify = require('gulp-notify')
	, clean = require('gulp-clean')

	, taskName = 'gulp-clean'
	;

function task() {
	config.beforeTask(taskName);

	var taskProcess = taskProcess = gulp.src(taskName)
		.pipe(clean());

	config.afterTask(taskName);

	return taskProcess;
}

module.exports = task;