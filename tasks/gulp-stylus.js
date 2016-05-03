const config = require('./bubble-config.js')
	, tasks = config.tasks
	, gulp = require('gulp')
	, notify = require('gulp-notify')
	, stylus = require('gulp-stylus')

	, taskName = 'gulp-stylus'
	;

function task() {
	config.beforeTask(taskName);
	
	var taskProcess = gulp.src(tasks[taskName].src)
		.pipe(stylus())
		.pipe(gulp.dest(tasks[taskName].dest));

	config.afterTask(taskName);
}

module.exports = task;