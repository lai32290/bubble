angular.module('app', ['ui.router']);

angular.module('app')

	.config(config);



config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

	 $urlRouterProvider.otherwise("/state1");

	

	 $stateProvider

	 	.state('state1', {

	 		url: '/state1'

	 		, templateUrl: '/pages/profiles.html'

	 	})

	 	;

}
//=require ../_js/controllers.js