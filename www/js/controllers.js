angular.module('app.controllers', [])

    .controller('jogarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('pontoDeVendaCtrl', function ($scope, $cordovaGeolocation) {

        $cordovaGeolocation.getCurrentPosition().then((resp) => {
            window.onload = getMyLocation;

            var map;
            function getMyLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(displayLocation);
                } else {
                    alert('Deu Ruim!');
                };
            };

            function displayLocation(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var latLng = new google.maps.LatLng(latitude, longitude);
                showMap(latLng);
                addNearByPlaces(latLng);
                apiMarkerCreate(latLng);
            };

            function showMap(latLng) {
                var mapOptions = {
                    center: latLng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById('map'), mapOptions);
            };

            function addNearByPlaces(latLng) {
                var nearByService = new google.maps.places.PlacesService(map);
                var request = {
                    location: latLng,
                    radius: 1000,
                    types: ['dealership']
                };
                nearByService.nearbySearch(request, searchNearBy);
            };

            function searchNearBy(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        apiMarkerCreate(place.geometry.location, place);
                    };
                };
            };

            function apiMarkerCreate(latLng, placeResult) {
                var markerOptions = {
                    position: latLng,
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    clickable: true
                };
                var marker = new google.maps.Marker(markerOptions);
                if (placeResult) {
                    var content = placeResult.name + '<br/>' + placeResult.vicinity + '<br/>' + placeResult.types + '<br/>';
                } else {
                    var content = 'Estou aqui: ' + latLng.lat() + ', ' + latLng.lng();
                    windowInfoCreate(marker, latLng, content);
                };
            };

            function windowInfoCreate(marker, latLng, content) {
                var infoWindowOptions = {
                    content: content,
                    position: latLng
                };
                var inforWindow = new google.maps.inforWindow(infoWindowOptions);

                google.maps.event.addListener(marker, 'click', function () {
                    inforWindow.open(map);
                });
            }
        }), function (error) {
            console.log("Could not get location");
        }
    })

    //     $cordovaGeolocation.getCurrentPosition().then((resp) => {
    //         latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    //         mapOptions = {
    //             center: latLng,
    //             zoom: 17,
    //         };
    //         var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //         var markerOptions = {
    //             position: latLng,
    //             map: latLng,
    //             title: 'Estou Aqui!',
    //             animation: google.maps.Animation.BOUNCE, //DROP | BOUNCE
    //         };
    //         marker = new google.maps.Marker(markerOptions);
    //         marker.setMap(map);
    //     }, function (error) {
    //         console.log("Could not get location");
    //     })
    // })

    .controller('feirasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('qRCODECtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])