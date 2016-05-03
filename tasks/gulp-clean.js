const config = require('./bubble-config.js')
	, tasks = config.tasks
	, gulp = require('gulp')
	, notify = require('gulp-notify')
	, clean = require('gulp-clean')

	, taskName = 'gulp-clean'
	;

function task() {
	config.beforeTask(taskName);

	var taskProcess = gulp.src(tasks[taskName].src)
		.pipe(clean());

	taskProcess = config.afterTask(taskName, taskProcess);

	return taskProcess;
}

module.exports = task;