angular.module('app.services', [])

	.service('$dataFactory', ['$http', function ($http) {
		return {
			getLocais: getLocais
		};
		function getLocais() {
			return $http({
				method: 'GET',
				url: 'https://hvy025u372.execute-api.sa-east-1.amazonaws.com/prod/LambdaPSA/lojas',
				crossDomain: true,
				dataType: 'json',
			}).then(function (o) {
				return o.data;
			});
		};
	}]);