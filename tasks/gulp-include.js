const config = require('./bubble-config.js')
	, tasks = config.tasks
	, gulp = require('gulp')
	, notify = require('gulp-notify')
	, include = require('gulp-include')

	, taskName = 'gulp-include'
	;

function task() {
	config.beforeTask(taskName);
	
	var taskProcess = gulp.src(tasks[taskName].src)
		.pipe(include())
		.pipe(gulp.dest(tasks[taskName].dest));

	config.afterTask(taskName, taskProcess);
}

module.exports = task;