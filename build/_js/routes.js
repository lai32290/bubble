 $urlRouterProvider.otherwise("/state1");

 $stateProvider
 	.state('state1', {
 		url: '/state1'
 		, templateUrl: '/pages/profiles.html'
 	})
 	;