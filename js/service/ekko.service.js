myApp.service('$ekkoService', ['$http','$q',function($http,$q){
    //条件查询角色
	this.getData = function(){		
		var deferred=$q.defer();
		$http({
			method: 'GET',
			url: "data/Data.json"
		}).then(function(result) {
			deferred.resolve(result.data);
		})
		return deferred.promise;
	};
}]);
