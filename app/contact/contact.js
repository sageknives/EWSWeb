'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider,$scope) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope','$route','contentApi',function($scope,$route,contentApi) {
	var vm = this;
  $scope.$parent.spinnerState = "";
	contentApi.getContent('contact').then(function(data) {
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