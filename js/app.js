var myApp=angular.module('lol',['ui.router']);


myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when("", "/ekko");
		$stateProvider
			.state("jinx666", {
				url: "/jinx",
				templateUrl: 'template/jinx.html',
				controller:"jinx123"
			})
			.state("ekko", {
				url: "/ekko",
				templateUrl: 'template/ekko.html',
				controller:"ekko"
			})

}])