(function() {
    'use strict';
    angular.module('myApp').directive('footerinfo', function() {
      return {
        restrict: 'AE',
        replace: true,
        templateUrl:'footer/footer.html'
      };
    });
})();