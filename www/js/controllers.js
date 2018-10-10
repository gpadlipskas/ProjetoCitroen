angular.module('app.controllers', [])

  .controller('premiosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('loginCtrl', function ($scope, $stateParams) {

    // var auth = $firebaseAuth();
    // var ref = firebase.database().ref('usuarios');
    // var usuarios = $firebaseArray(ref);

    // $scope.dados = {};

    // $scope.cadastrar = function () {
    // 	auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.senha).then();
    // }

  })

  .controller('cadastroCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('pontoDeVendaCtrl', function ($scope, $state) {

      $Ctrl = $scope;
      var mapOptions = null;

	  //  Inicialização e configuração do mapa, centrado na FIAP

	  p0 = new google.maps.LatLng(-23.5745808,-46.6235209); //(resp.coords.latitude, resp.coords.longitude);
	  p1 = new google.maps.LatLng(-23.5598371,-46.6654529); 
	  p2 = new google.maps.LatLng(-23.574077,-46.6584783);
	  p3 = new google.maps.LatLng(-23.5707522,-46.7224456);
	  p4 = new google.maps.LatLng(-23.5740614,-46.6584784);
	  p5 = new google.maps.LatLng(-23.5708545,-46.7227238);
	  p6 = new google.maps.LatLng(-23.520612,-46.6145769);

      var mapOptions = {timeout: 10000,enableHighAccuracy: true,center: p0,zoom: 12,zoomControl: true,scaleControl: false,mapTypeControl: false,streetViewControl: false,mapTypeId: 'roadmap'};
	  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
	  
      var infoWindow0 = new google.maps.InfoWindow({content: "Estou Aqui!"});
      var infoWindow1 = new google.maps.InfoWindow({content: "Concessionária Citroen Itavema Europa Itaim"});
      var infoWindow2 = new google.maps.InfoWindow({content: "Concessionária Citroen Le Mans"});
      var infoWindow3 = new google.maps.InfoWindow({content: "Peugeot-Citroen do Brasil Automóveis"});
      var infoWindow4 = new google.maps.InfoWindow({content: "Concessionária Citroen"});
      var infoWindow5 = new google.maps.InfoWindow({content: "GP France Citroën"});
      var infoWindow6 = new google.maps.InfoWindow({content: "Peugeot - Super France Itavema"});
	  
      var marker0 = new google.maps.Marker({position: p0,animation: google.maps.Animation.DROP}); //DROP | BOUNCE
      var marker1 = new google.maps.Marker({position: p1,animation: google.maps.Animation.DROP}); //DROP | BOUNCE
      var marker2 = new google.maps.Marker({position: p2,animation: google.maps.Animation.DROP}); //DROP | BOUNCE
      var marker3 = new google.maps.Marker({position: p3,animation: google.maps.Animation.DROP}); //DROP | BOUNCE
      var marker4 = new google.maps.Marker({position: p4,animation: google.maps.Animation.DROP}); //DROP | BOUNCE
      var marker5 = new google.maps.Marker({position: p5,animation: google.maps.Animation.DROP}); //DROP | BOUNCE
      var marker6 = new google.maps.Marker({position: p6,animation: google.maps.Animation.DROP}); //DROP | BOUNCE
	  
	  google.maps.event.addListener(marker0, 'click', function () {infoWindow0.open($scope.map, marker0)});
	  google.maps.event.addListener(marker1, 'click', function () {infoWindow1.open($scope.map, marker1)});
	  google.maps.event.addListener(marker2, 'click', function () {infoWindow2.open($scope.map, marker2)});
	  google.maps.event.addListener(marker3, 'click', function () {infoWindow3.open($scope.map, marker3)});
	  google.maps.event.addListener(marker4, 'click', function () {infoWindow4.open($scope.map, marker4)});
	  google.maps.event.addListener(marker5, 'click', function () {infoWindow5.open($scope.map, marker5)});
	  google.maps.event.addListener(marker6, 'click', function () {infoWindow6.open($scope.map, marker6)});
	  
	  marker0.setMap($scope.map);
	  marker1.setMap($scope.map);
	  marker2.setMap($scope.map);
	  marker3.setMap($scope.map);
	  marker4.setMap($scope.map);
	  marker5.setMap($scope.map);
	  marker6.setMap($scope.map);
    },
    function (error) {
      console.log("Não foi possível determinar sua localização.");
    })


  // navigator.permissions.query({
  //     'name': 'geolocation'
  //   })
  //   .then(permission => console.info(permission));
  // $cordovaGeolocation.getCurrentPosition().then((resp) => {

  // Inicialização e configuração do mapa, centrado na FIAP
  //   var p0 = new google.maps.LatLng(-23.5741031, -46.6233988); //(resp.coords.latitude, resp.coords.longitude);
  //   var mapOptions = {
  //     center: p0,
  //     zoom: 14,
  //     zoomControl: true,
  //     scaleControl: false,
  //     mapTypeControl: false,
  //     streetViewControl: false,
  //     mapTypeId: 'roadmap'
  //   };

  //   $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //   var infoWindow0 = new google.maps.InfoWindow({
  //     content: "Estou Aqui!"
  //   });
  //   var marker0 = new google.maps.Marker({
  //     position: p0,
  //     animation: google.maps.Animation.DROP
  //   }); //DROP | BOUNCE
  //   google.maps.event.addListener(marker0, 'click', function () {
  //     infoWindow0.open($scope.map, marker0)
  //   });
  //   marker0.setMap($scope.map);

  //   $dataFactory.getLocais().then(function (res) {

  //     // Declaração das variáveis do forEach
  //     var p1 = [];
  //     $scope.infoWindow1 = [];
  //     $scope.markers = [];
  //     $scope.infoWindows = [];
  //     // forEach para percorrer todos os dados da collection locais e colocar um marker de acordo com as coordenadas
  //     for (var i = 0; i < res.length; i++) {
  //       p1 = new google.maps.LatLng(res[i].lat, res[i].lng);
  //       $scope.infoWindow1[i] = new google.maps.InfoWindow({
  //         content: res[i].nome
  //       });
  //       var marker1 = new google.maps.Marker({
  //         position: p1,
  //         animation: google.maps.Animation.DROP
  //       });

  //       marker1.setMap($scope.map);
  //       $scope.infoWindows.push($scope.infoWindow1[i]);
  //       $scope.markers.push(marker1);
  //     }
  //     for (var i = 0; i < $scope.markers.length; i++) {
  //       google.maps.event.addListener($scope.markers[i], 'click', function () {
  //         $scope.infoWindows[i].open($scope.map, $scope.markers[i])

  //       });
  //     }
  //   });


  .controller('feirasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])


  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])


  .controller('jogarCtrl', ['$scope', '$stateParams', '$timeout',
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $timeout) {

      var options = ["TEST DRIVE", "CARRINHO", "CHAVEIRO", "NÃO FOI DESSA VEZ"];

      var startAngle = 0;
      var arc = Math.PI / (options.length / 2);
      var spinTimeout = null;

      var spinArcStart = 10;
      var spinTime = 0;
      var spinTimeTotal = 0;

      var ctx;

      function byte2Hex(n) {
        var nybHexString = "0123456789ABCDEF";
        return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
      }

      function RGB2Color(r, g, b) {
        return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
      }

      function getColor(item, maxitem) {
        var phase = 0;
        var center = 128;
        var width = 127;
        var frequency = Math.PI * 2 / maxitem;

        red = Math.sin(frequency * item + 2 + phase) * width + center;
        green = Math.sin(frequency * item + 0 + phase) * width + center;
        blue = Math.sin(frequency * item + 4 + phase) * width + center;

        return RGB2Color(red, green, blue);
      }

      $scope.drawRouletteWheel = function () {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var outsideRadius = 125;
          var textRadius = 70;
          var insideRadius = 10;

          ctx = canvas.getContext("2d");
          batata = canvas.getContext("2d");
          ctx.clearRect(0, 0, 500, 500);

          ctx.strokeStyle = "black";
          ctx.lineWidth = 2;

          ctx.font = 'bold 12px Montserrat, Arial';

          for (var i = 0; i < options.length; i++) {
            var angle = startAngle + i * arc;
            //ctx.fillStyle = colors[i];
            ctx.fillStyle = getColor(i, options.length);

            ctx.beginPath();
            ctx.arc(175, 175, outsideRadius, angle, angle + arc, false);
            ctx.arc(175, 175, insideRadius, angle + arc, angle, true);
            ctx.stroke();
            ctx.fill();

            ctx.save();
            ctx.shadowOffsetX = -1;
            ctx.shadowOffsetY = -1;
            ctx.shadowBlur = 0;
            ctx.shadowColor = "rgb(220,220,220)";
            ctx.fillStyle = "black";
            ctx.translate(175 + Math.cos(angle + arc / 2) * textRadius,
              175 + Math.sin(angle + arc / 2) * textRadius);
            ctx.rotate(angle + arc / 2 + Math.PI / 2);
            var text = options[i];
            ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            ctx.restore();
          }

          //Arrow
          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.moveTo(175 - 4, 175 - (outsideRadius + 5));
          ctx.lineTo(175 + 4, 175 - (outsideRadius + 5));
          ctx.lineTo(175 + 4, 175 - (outsideRadius - 5));
          ctx.lineTo(175 + 9, 175 - (outsideRadius - 5));
          ctx.lineTo(175 + 0, 175 - (outsideRadius - 13));
          ctx.lineTo(175 - 9, 175 - (outsideRadius - 5));
          ctx.lineTo(175 - 4, 175 - (outsideRadius - 5));
          ctx.lineTo(175 - 4, 175 - (outsideRadius + 5));
          ctx.fill();
        }
      }

      $scope.spin = function () {
        spinAngleStart = Math.random() * 10 + 10;
        spinTime = 0;
        spinTimeTotal = Math.random() * 3 + 4 * 1000;
        $scope.rodaRoda();
      }

      $scope.rodaRoda = function () {
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
          $scope.stopRotateWheel();
          return;
        }
        var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
        startAngle += (spinAngle * Math.PI / 180);
        $scope.drawRouletteWheel();
        $scope.spinTimeout = $timeout(function () {
          $scope.rodaRoda();
        }, 30);;
      }

      $scope.stopRotateWheel = function () {
        clearTimeout($scope.spinTimeout);
        var degrees = startAngle * 180 / Math.PI + 90;
        var arcd = arc * 180 / Math.PI;
        var index = Math.floor((360 - degrees % 360) / arcd);
        ctx.save();
        batata.save();
        ctx.font = 'bold 30px Montserrat, Arial';
        batata.font = 'bold 15px Montserrat, Arial';
        if (options[index] == "NÃO FOI DESSA VEZ") {
          var premio = "";
        } else {
          var premio = "SEU PRÊMIO É";
        }
        batata.fillText(premio, 160 - ctx.measureText(text).width / 2, 325 + 10);
        var text = options[index]
        ctx.fillText(text, 175 - ctx.measureText(text).width / 2, 360 + 10);
        ctx.restore();
      }

      function easeOut(t, b, c, d) {
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
      }

      $scope.drawRouletteWheel();
    }
  ])
