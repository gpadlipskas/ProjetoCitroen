angular.module('app.services', [])
	.service('$dataFactory', ['$http', function ($http) {

		return {
			// locais
			getLocais: getLocais,
			criaLocal: criaLocal,
			atualizaLocal: atualizaLocal,
			excluiLocal: excluiLocal,
		};

		// locais
		function getLocais() {
			return $http({
				method: 'GET',
				url: '/locais'
			}).then(function (o) {
				return o.data;
			});
		};

		function criaLocal(local) {
			return $http({
				method: 'POST',
				url: '/criaLocal',
				data: local
			}).then(function (o) {
				return o.data;
			});
		};

		function atualizaLocal(local) {
			return $http({
				method: 'POST',
				url: '/atualizaLocal',
				data: local
			}).then(function (o) {
				return o.data;
			});
		};

		function excluiLocal(local) {
			return $http({
				method: 'POST',
				url: '/excluiLocal',
				data: local
			}).then(function (o) {
				return o.data;
			});
		};

	}]);