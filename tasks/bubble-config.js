const YAML = require('yamljs')
	, notify = require('gulp-notify')
	;

var config = YAML.load('./config.yaml');


config.hasNotify = function(task) {
	if(task === undefined)
		return config.notify !== undefined ? config.notify : false;

	return config.tasks[task].notify !== undefined;
};

config.afterTask = function(task, taskProcess) {
	if(config.hasNotify() && config.hasNotify(task))
		taskProcess = taskProcess.pipe(notify(config.tasks[task].notify));

	return taskProcess;
};

config.beforeTask = function(task) {

}

module.exports = config;