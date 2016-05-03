const YAML = require('yamljs')
	, notify = require('gulp-notify')
	;

var config = YAML.load('./config.yaml');


config.hasNotify = function(task) {
	if(task === undefined)
		return config.notify !== undefined ? config.notify : false;

	return config.tasks[task].notify !== undefined;
};

config.afterTask = function(task) {
	if(config.hasNotify() && config.hasNotify(task))
		teskProcess.pipe(notify(config.tasks[task].notify));
};

config.beforeTask = function(task) {

}

module.exports = config;