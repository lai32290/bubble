const YAML = require('yamljs')
	, gulp = require('gulp')
	, bubble = require('./bubble.js')
	;

const config = YAML.load('./config.yaml');

gulp.task('default', function() {
	gulp.start('build', 'watch');
});

gulp.task('clean', bubble.clean);
gulp.task('copy', 		['clean'], bubble.copy);
gulp.task('stylus', 	['copy'], bubble['gulp-stylus']);
gulp.task('include', 	['copy'], bubble['gulp-include']);
gulp.task('watch', bubble.watch);

gulp.task('build', 		['copy'], buildTask);

function buildTask() {
	gulp.start('stylus', 'include');
}