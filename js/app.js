var myApp=angular.module('lol',['ui.router']);


myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when("", "/jinx");
		$stateProvider
			.state("jinx", {
				url: "/jinx",
				templateUrl: 'template/jinx.html',
				controller:"jinx"
			})
			.state("ekko", {
				url: "/ekko",
				templateUrl: 'template/ekko.html',
				controller:"ekko"
			})

}])