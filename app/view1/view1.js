'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider, $scope) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
  
}])

.controller('View1Ctrl', ['$scope','contentApi',function($scope,contentApi) {
	var vm = this;
	contentApi.getContent('about').then(function(data) {
        $scope.content = data;
    }).finally(function(){
        //$scope.$broadcast('scroll.refreshComplete');
    });
}]);