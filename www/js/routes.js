angular.module('app.routes', [])

	.config(function ($stateProvider, $urlRouterProvider) {

		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

			.state('menu.jogar', {
				url: '/home',
				views: {
					'side-menu21': {
						templateUrl: 'templates/jogar.html',
						controller: 'jogarCtrl'
					}
				}
			})

			.state('menu.pontoDeVenda', {
				url: '/pontos_de_venda',
				views: {
					'side-menu21': {
						templateUrl: 'templates/pontoDeVenda.html',
						controller: 'pontoDeVendaCtrl'
					}
				}
			})

			.state('menu.feiras', {
				url: '/feiras',
				views: {
					'side-menu21': {
						templateUrl: 'templates/feiras.html',
						controller: 'feirasCtrl'
					}
				}
			})

			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})

			.state('menu', {
				url: '/sidebar',
				templateUrl: 'templates/menu.html',
				controller: 'menuCtrl'
			})

			.state('cadastro', {
				url: '/cadastro',
				templateUrl: 'templates/cadastro.html',
				controller: 'cadastroCtrl'
			})

		$urlRouterProvider.otherwise('/login')

	});