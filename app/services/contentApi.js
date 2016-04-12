(function() {
    'use strict';

    angular.module('myApp').factory('contentApi', ['$http', '$q', contentApi]);

    function contentApi($http, $q) {

        
        console.log("content Api");
        var base = "electricwallstudios.com";
        var tempBase = "sagegatzke.com/ews2";

        var getContent = function(pageRequest) {

            console.log('in content api ');
            var deferred = $q.defer();

            $http.get('http://'+base+'/content/'+ pageRequest+'.php')
                .success(function(data) {
                    //loader
                    console.log("Received data via HTTP");
                    console.log(data);
                    //data = JSON.parse(data);
                    console.log(data);
                    //loader hide
                    deferred.resolve(data.content);
                })
                .error(function(data, status, header, config) {
                    console.log("Error while making HTTP call.");
                    //loader hide
                    deferred.reject();
                });
                
            
            return deferred.promise;
        };

        return {
            getContent: getContent
        };
    };
})();