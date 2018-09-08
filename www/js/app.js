// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ngCordova'])

	.config(function ($ionicConfigProvider, $sceDelegateProvider) {

		$sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

	})

	.run(function ($ionicPlatform) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
	})

	/*
	  This directive is used to disable the "drag to open" functionality of the Side-Menu
	  when you are dragging a Slider component.
	*/
	.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function ($ionicSideMenuDelegate, $rootScope) {
		return {
			restrict: "A",
			controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

				function stopDrag() {
					$ionicSideMenuDelegate.canDragContent(false);
				}

				function allowDrag() {
					$ionicSideMenuDelegate.canDragContent(true);
				}

				$rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
				$element.on('touchstart', stopDrag);
				$element.on('touchend', allowDrag);
				$element.on('mousedown', stopDrag);
				$element.on('mouseup', allowDrag);

			}]
		};
	}])

	/*
	  This directive is used to open regular and dynamic href links inside of inappbrowser.
	*/
	.directive('hrefInappbrowser', function () {
		return {
			restrict: 'A',
			replace: false,
			transclude: false,
			link: function (scope, element, attrs) {
				var href = attrs['hrefInappbrowser'];

				attrs.$observe('hrefInappbrowser', function (val) {
					href = val;
				});

				element.bind('click', function (event) {

					window.open(href, '_system', 'location=yes');

					event.preventDefault();
					event.stopPropagation();

				});
			}
		};
	})

	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('map', {
				url: '/',
				templateUrl: 'templates/pontoDeVenda.html',
				controller: 'pontoDeVendaCtrl'
			})
			.state('jogar', {
				url: '/jogar',
				views: {
				  'menuContent': {
					templateUrl: 'templates/jogar.html',
					controller: 'jogarCtrl'
				  }
				}
			  });
	})

	.directive('googleplace', function () {
		return {
			require: 'ngModel',

			link: function (scope, element, attrs, model) {
				var options = {
					types: ['address']

				};
				scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

				google.maps.event.addListener(scope.gPlace, 'place_changed', function () {
					var geoComponents = scope.gPlace.getPlace();
					var latitude = geoComponents.geometry.location.lat();
					var longitude = geoComponents.geometry.location.lng();
					var coordenadas = [latitude, longitude];
					var addresscomponents = geoComponents.address_components;

					var components;
					components = {};

					angular.forEach(addresscomponents, function (address_component) {
						angular.forEach(address_component.types, function (type) {
							components[type] = address_component.long_name;
						});
					});

					components['coordenadas'] = coordenadas;

					scope.$apply(function () {
						var retorno = components;
						model.$setViewValue(retorno);
					});
				});
			},
		};
	});