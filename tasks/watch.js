const config = require('./bubble-config.js')
	, tasks = config.tasks
	, gulp = require('gulp')
	
	, taskName = 'watch'
	;

function task() {
	gulp.watch(tasks[taskName].src).on('change', function() {
		gulp.start(tasks[taskName].tasks);
	});
}

module.exports = task;