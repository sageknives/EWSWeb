'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngTouch',
  'angular-flexslider',
  'ngRoute',
  'myApp.home',
  'myApp.studio',
  'myApp.clients',
  'myApp.photos',
  'myApp.gearlist',
  'myApp.contact',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller("AppController",function($scope){
  $scope.title = "Electric Wall Studios";
	$scope.menuState = "";
  $scope.scrollState = "scroll";
  $scope.active = "/about";
  $scope.spinnerState = "hidden";
	$scope.menuButton = function(){
		$scope.menuState = $scope.menuState === "" ? "menu-open" : "";
	};
  $scope.toggleMenu = function(cmd){
    console.log($scope);
    $scope.menuState = cmd === 'open' ? "menu-open" : "";
  };
})
.run(function($rootScope, $location,$window) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      console.log($location.$$path);
      $rootScope.$$childHead.active = $location.$$path;
    	$rootScope.$$childHead.menuState = "";
   });
    //to know if app is online or not
    /*
      $rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
          $rootScope.online = false;
        });
      }, false);
      $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
    */
});