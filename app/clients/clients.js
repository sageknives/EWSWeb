'use strict';

angular.module('myApp.clients', ['ngRoute'])

.config(['$routeProvider', function($routeProvider, $scope) {
  $routeProvider.when('/clients', {
    templateUrl: 'clients/clients.html',
    controller: 'ClientsCtrl'
  });
  
}])

.controller('ClientsCtrl', ['$scope','$route','contentApi',function($scope,$route,contentApi) {
	var vm = this;
  console.log($scope);
  $scope.$parent.spinnerState = "";
	contentApi.getContent('clients').then(function(data) {
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