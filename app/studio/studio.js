'use strict';

angular.module('myApp.studio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider, $scope) {
  $routeProvider.when('/studio', {
    templateUrl: 'studio/studio.html',
    controller: 'StudioCtrl'
  });
  
}])

.controller('StudioCtrl', ['$scope','$route','contentApi',function($scope,$route,contentApi) {
	var vm = this;
  $scope.$parent.spinnerState = "";
	contentApi.getContent('studio').then(function(data) {
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
}]);