
(function(){
    angular.module('apiGymnastics', [ ])
    .controller('MainController',[ '$http', function($http){
    	var self = this;
        $http.get('trending.json')
        .success(function(data){
    		for(i=0; i < data.results.length; i++){
    			console.log(data.results[i].MainImage.url_fullxfull);
    		}
        });
    } ]) //END MainController
; //End tiy-catalog
})();