'use strict';

angular.module('myApp.photos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider,$scope) {
  $routeProvider.when('/photos', {
    templateUrl: 'photos/photos.html',
    controller: 'PhotosCtrl'
  });
}])
.controller('PhotosCtrl', ['$scope','$route','contentApi',function($scope,$route,contentApi) {
	//var vm = this;
	$scope.$parent.spinnerState = "";

	contentApi.getContent('photos').then(function(data) {
        $scope.photos = data;        
        $scope.$parent.spinnerState = "hidden";
        $scope.$parent.scrollState = "scroll";
        var setPhotobox = function(){
        	$scope.photoboxTitle = $scope.photos[$scope.index].title;
        	$scope.photoboxSrc = $scope.photos[$scope.index].link;
        };
        $scope.open = false;
        $scope.index = 4;
        setPhotobox(0);
        $scope.openPhotobox = function(index){
        	$scope.open=true;
        	$scope.index = index;
        	$scope.$parent.scrollState = "noscroll";
        	setPhotobox();
        };
        var setIndex = function(index){
        	if($scope.index==0) $scope.index = $scope.photos.length;
        	$scope.index = ($scope.index-index)%$scope.photos.length; 
        };
        $scope.prev = function(){
        	console.log("in prev");
        	setIndex(1);
        	setPhotobox();
        };
        $scope.next = function(){
        	console.log("in next");
        	setIndex(-1);
        	setPhotobox();
        };
        $scope.close = function(){
        	$scope.$parent.scrollState = "scroll";
        	$scope.open = false;
        };
        $scope.blockSlide = function($event,direction){
          console.log("in block slide");
          $event.stopPropagation(); 
          if(direction === 'left') $scope.next();
          else $scope.prev();
                 
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
/*.controller('PhotosCtrl', function ($scope, $log) {
$scope.photos = [
		{
			title: "Studio1",
			link: "studio1.jpg"
		},
		{
			title: "Studio2",
			link: "studio2.jpg"
		},
		{
			title: "Studio3",
			link: "studio3.jpg"
		},
		{
			title: "Studio4",
			link: "studio4.jpg"
		},
		{
			title: "Studio5",
			link: "studio5.jpg"
		},
		{
			title: "Studio6",
			link: "studio6.jpg"
		},
		{
			title: "Studio7",
			link: "studio7.jpg"
		},
		{
			title: "Studio8",
			link: "studio8.jpg"
		},
		{
			title: "Studio9",
			link: "studio9.jpg"
		},
		{
			title: "Studio10",
			link: "studio10.jpg"
		},
		{
			title: "Studio11",
			link: "studio11.jpg"
		},
	
	];

});*/