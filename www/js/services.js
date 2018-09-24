angular.module('app.services', [])
	.service('$dataFactory', ['$http', function ($http) {

		return {
			getLocais: getLocais
		};

		function getLocais() {
			return $http({
				method: 'GET',
				url: '/pontos_de_venda'
			}).then(function (o) {
				return o.data;
			});
		};

	}]);