'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider,$scope) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])
.controller('HomeCtrl', ['$scope','$route','contentApi',function($scope,$route,contentApi) {
	//var vm = this;
	$scope.$parent.spinnerState = "";

	contentApi.getContent('home').then(function(data) {
        $scope.content = data;   
        //console.log(JSON.stringify($scope.content));     
        $scope.$parent.spinnerState = "hidden";
        $scope.blockSlide = function($event,direction){
          console.log("in block slide");
          console.log($event);
          if(direction === 'left' && $scope.$parent.menuState === 'menu-open')console.log("nope");
          else{
            $event.stopPropagation(); 
          }
                 
        };
    }).catch(function(){
      $scope.$parent.spinnerState = "hidden";
      $scope.errorMessage ="error connecting to site";
      $scope.refresh = function(){
        $route.reload();
      };
    }).finally(function(){
        //$scope.$broadcast('scroll.refreshComplete');
    });
    
}]);
