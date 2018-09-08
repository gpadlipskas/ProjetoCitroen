angular.module('app.controllers', [])

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
		
		
    .controller('jogarCtrl', ['$scope', '$stateParams', '$timeout', 
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $timeout) {

		var options = ["CinemaMock", "OutraCoisaMock", "MaisUmMock", "OutraMock", "Nada"];

		var startAngle = 0;
		var arc = Math.PI / (options.length / 2);
		var spinTimeout = null;

		var spinArcStart = 10;
		var spinTime = 0;
		var spinTimeTotal = 0;

		var ctx;

		document.getElementById("spin").addEventListener("click", spin);

		function byte2Hex(n) {
		  var nybHexString = "0123456789ABCDEF";
		  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
		}

		function RGB2Color(r,g,b) {
			return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
		}

		function getColor(item, maxitem) {
		  var phase = 0;
		  var center = 128;
		  var width = 127;
		  var frequency = Math.PI*2/maxitem;
		  
		  red   = Math.sin(frequency*item+2+phase) * width + center;
		  green = Math.sin(frequency*item+0+phase) * width + center;
		  blue  = Math.sin(frequency*item+4+phase) * width + center;
		  
		  return RGB2Color(red,green,blue);
		}

		function drawRouletteWheel() {
		  var canvas = document.getElementById("canvas");
		  if (canvas.getContext) {
			var outsideRadius = 200;
			var textRadius = 160;
			var insideRadius = 125;

			ctx = canvas.getContext("2d");
			ctx.clearRect(0,0,500,500);

			ctx.strokeStyle = "black";
			ctx.lineWidth = 2;

			ctx.font = 'bold 12px Helvetica, Arial';

			for(var i = 0; i < options.length; i++) {
			  var angle = startAngle + i * arc;
			  //ctx.fillStyle = colors[i];
			  ctx.fillStyle = getColor(i, options.length);

			  ctx.beginPath();
			  ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
			  ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
			  ctx.stroke();
			  ctx.fill();

			  ctx.save();
			  ctx.shadowOffsetX = -1;
			  ctx.shadowOffsetY = -1;
			  ctx.shadowBlur    = 0;
			  ctx.shadowColor   = "rgb(220,220,220)";
			  ctx.fillStyle = "black";
			  ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
							250 + Math.sin(angle + arc / 2) * textRadius);
			  ctx.rotate(angle + arc / 2 + Math.PI / 2);
			  var text = options[i];
			  ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
			  ctx.restore();
			} 

			//Arrow
			ctx.fillStyle = "black";
			ctx.beginPath();
			ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
			ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
			ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
			ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
			ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
			ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
			ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
			ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
			ctx.fill();
		  }
		}

		function spin() {
		  spinAngleStart = Math.random() * 10 + 10;
		  spinTime = 0;
		  spinTimeTotal = Math.random() * 3 + 4 * 1000;
		  $scope.rodaRoda();
		}

		$scope.rodaRoda = function() {
		  spinTime += 30;
		  if(spinTime >= spinTimeTotal) {
			stopRotateWheel();
			return;
		  }
		  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
		  startAngle += (spinAngle * Math.PI / 180);
		  drawRouletteWheel();
		  spinTimeout =  $timeout(function () {
        $scope.rodaRoda();
			}, 30);;
		}

		function stopRotateWheel() {
		  clearTimeout(spinTimeout);
		  var degrees = startAngle * 180 / Math.PI + 90;
		  var arcd = arc * 180 / Math.PI;
		  var index = Math.floor((360 - degrees % 360) / arcd);
		  ctx.save();
		  ctx.font = 'bold 30px Helvetica, Arial';
		  var text = options[index]
		  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
		  ctx.restore();
		}

		function easeOut(t, b, c, d) {
		  var ts = (t/=d)*t;
		  var tc = ts*t;
		  return b+c*(tc + -3*ts + 3*t);
		}

		drawRouletteWheel();
        }])