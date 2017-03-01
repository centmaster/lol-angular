myApp.controller('jinx123', ['$scope', '$parse',function($scope,$parse) {
	$scope.fizz = "Taunt Fizz falls asleep";
	$scope.ezreal="Time for a true display of skill";
	$scope.lux="Tactical decision summoner";
	$scope.jinx="Rules are made to be broken... like buildings!";
	$scope.ekko="People wasted a lot of time, and then wish for more."

	$scope.$watch('hero',function(newVal,oldVal,scope){
		if(newVal!==oldVal){
			var parseFun=$parse(newVal);
			scope.whattheysay = parseFun(scope);
		}
	});
}])