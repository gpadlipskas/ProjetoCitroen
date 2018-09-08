angular.module('app.controllers', [])

    .controller('jogarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('pontoDeVendaCtrl', function ($cordovaGeolocation) {

        $cordovaGeolocation.getCurrentPosition().then((resp) => {

            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

            var mapOptions = {
                center: latLng,
                zoom: 17,
                zoomControl: true,
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false
            };

            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var marker = new google.maps.Marker({
                position: latLng,
                title: 'Estou Aqui!',
                animation: google.maps.Animation.BOUNCE, //DROP | BOUNCE
            });

            marker.setMap(map);

        }, function (error) {
            console.log("Não foi possível determinar sua localização.");
        });
    })

    .controller('feirasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName

        function ($scope, $stateParams, $dataFactory) {
            $Ctrl = $scope;

            $Ctrl.googleEndereco = {
                coordenadas: []
            };

            $Ctrl.onovo =
                {
                    endereco: {
                        local: null,
                        coordenadas: {
                            lat: null,
                            lng: null
                        }
                    }
                };

            $Ctrl.reload = function () {
                $route.reload(true);
            };

            $Ctrl.atualizar = function () {
                $Ctrl.googleEndereco.coordenadas[0] = $Ctrl.googleEndereco.coordenadas[0];
                $Ctrl.googleEndereco.coordenadas[1] = $Ctrl.googleEndereco.coordenadas[1];
            };

            $Ctrl.enviarBanco = function (obj, onovo) {
                onovo.endereco.local = (obj.route) + (" ") + (obj.street_number) + (" ") + (obj.administrative_area_level_2) + (" ") + (obj.administrative_area_level_1) + (" ") + (obj.country);
                onovo.titulo = obj.titulo;
                onovo.endereco.coordenadas.lat = obj.coordenadas[0];
                onovo.endereco.coordenadas.lng = obj.coordenadas[1];
                $dataFactory.criaLocal(onovo).then(function (res) {
                    alert("Local " + onovo.titulo + " inserido com sucesso !");
                    $route.reload(true);
                });
            };
        }])

    .controller('qrCodeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])