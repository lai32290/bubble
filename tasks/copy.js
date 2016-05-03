const config = require('./bubble-config.js')
	, tasks = config.tasks
	, notify = require('gulp-notify')
	, gulp = require('gulp')

	, taskName = 'copy'
	;

function task() {
	config.beforeTask(taskName);
	
	var taskProcess = gulp.src(tasks.copy.src)
		.pipe(gulp.dest(tasks.copy.dest));

	config.afterTask(taskName);

	return taskProcess;
}

module.exports = task;