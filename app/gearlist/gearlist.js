'use strict';

angular.module('myApp.gearlist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider,$scope) {
  $routeProvider.when('/gearlist', {
    templateUrl: 'gearlist/gearlist.html',
    controller: 'GearListCtrl'
  });
}])

.controller('GearListCtrl', ['$scope','$route','contentApi',function($scope,$route,contentApi) {
	var vm = this;
  	$scope.$parent.spinnerState = "";
	contentApi.getContent('gearlist').then(function(data) {
        $scope.content = data;
        $scope.$parent.spinnerState = "hidden";    
    }).catch(function(){
		$scope.$parent.spinnerState = "hidden";
    	$scope.errorMessage ="error connecting to site";
      $scope.refresh = function(){
        $route.reload();
      };
    }).finally(function(){
        //$scope.$broadcast('scroll.refreshComplete');
    });
	/*$scope.mainGear = [
		{
			title: "Pro Tools 10 HD Native"
		},
		{
			title: "Burl Mothership ADA"
		},
		{
			title: "Apogee ADA"
		},
	
	];
	$scope.gear = [
		
		{
			title: "Console:",
			items: 
			[
				{
					name: "20 Channel Trident Trimix/Series 70"
				}
			]
		},
		{
			title: "Mic Pres:",
			items: 
			[
				{
					name: "Burl BD1(2)"
				},
				{
					name: "API 512c(2)"
				},
				{
					name: "BAE 1073(2)"
				},
				{
					name: "Shadow Hills MonoGama(3)"
				},
				{
					name: "EZ1073(1)"
				},
			]
		},
		{
			title: "EQs:",
			items:
			[
				{
					name:"API 560(2)"
				},	
				{
					name:"BAE 1073(2)"
				},
				{
					name:"EZ1073(1)"
				},
				{
					name:"CAPI LC53a(2)"
				},
			]
		},
		{
			title: "Compressors:",
			items:
			[
				{
					name:"LA2A(1)"
				},	
				{
					name:"BAE 10DC(2)"
				},
				{
					name:"Purple MC77(2)"
				},
				{
					name:"Allen Smart C2 Stereo"
				},
				{
					name:"Levelor"
				}
			]
		},
		{
			title: "Reverbs/Delays:",
			items:
			[
				{
					name:"Lexicon PCM 60"
				},	
				{
					name:"Lexicon PCM 70"
				},
				{
					name:"Eventide H3000"
				},
				{
					name:"Eventide Space"
				},
			]
		},
		{
			title: "Mics:",
			items:
			[
				{
					name:"Neumann u87 AI(1)"
				},	
				{
					name:"Royer 121(2)"
				},
				{
					name:"AKG 414(2)"
				},
				{
					name:"Bock u195(2)"
				},
				{
					name:"Sennheiser 421(3)"
				},	
				{
					name:"Sennheiser 441(1)"
				},
				{
					name:"Shure Beta58(1)"
				},
				{
					name:"Shure sm58(1)"
				},
				{
					name:"Shure sm57(3)"
				},	
				{
					name:"Shure sm7b(1)"
				},
				{
					name:"Shure ksm27(1)"
				},
				{
					name:"Shure Green Bullet(1)"
				},
				{
					name:"Electro Voice RE20(2)"
				},	
				{
					name:"AKG d112(1)"
				}
			]
		},
		{
			title: "Amps:",
			items:
			[
				{
					name:"Hiwatt Custom 50"
				},	
				{
					name:"Orange Rocker 30"
				},
				{
					name:"Fender Bassman Black Face"
				},
				{
					name:"Ampeg SVT"
				},
				{
					name:"Ampeg VT40"
				},
				{
					name:"Mesa Boogie Studio Pre"
				}
			]
		},
		{
			title: "Cabs:",
			items:
			[
				{
					name:"Orange 4x12 with Fanes"
				},	
				{
					name:"Orange 2x12 with V 30s"
				},
				{
					name:"Ampeg 8x10"
				},
				{
					name:"Fender 2x12 open back"
				},
			]
		},
		{
			title: "Instruments:",
			items:
			[
				{
					name:"1973 Fender Telecaster Deluxe"
				},	
				{
					name:"1980 Gibson Flying V"
				},
				{
					name:"Gibson SG '61 Reissue"
				},
				{
					name:"Fender Mustang"
				},
				{
					name:"Fender Jaguar"
				},
				{
					name:"Fender Mustang Bass (short scale)"
				},
				{
					name:"1978 Gibson RD Artist Bass"
				},
				{
					name:"Gibson Hummingbird Acoustic"
				},
				{
					name:"Nord Electro 3 73 (mellotron samples)"
				},
				{
					name:"Fender Rhodes Stage 2 73"
				},
				{
					name:"Roland Juno 60"
				},
				{
					name:"1984 TAMA Swingstar 4 peice"
				},
			]
		},
		{
			title: "Beer:",
			items:
			[
				{
					name:"Rainier Mountain Fresh"
				},	
				{
					name:"Budweiser True"
				},
				{
					name:"(B.Y.O.B)"
				}
			]
		},
	];*/

}]);