
(function(){

    var app = angular.module("Etsy", ['ngAnimate']);

    
     app.controller("TabController", function() {
        this.tab = 1;

        this.setTab = function(newTab){
            this.tab = newTab;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };

    }); // END TABCONTROLLER
    

    app.controller("Cat1Controller",  [ '$http', function($http){
      var etsy = this; 
 
      $http.jsonp("https://openapi.etsy.com/v2/listings/active.js?callback=JSON_CALLBACK&api_key=q4ubii6kukovuc0hl2e8myxx&limit=50&category=pets&includes=MainImage")
        .success(function(data){
          etsy.results = data.results;
          console.log(etsy.results);
      });


        
      
    } ]); // END CONTROLLER
    
    app.controller("Cat2Controller",  [ '$http', function($http){
      var etsy = this; 
 
      $http.jsonp("https://openapi.etsy.com/v2/listings/active.js?callback=JSON_CALLBACK&api_key=q4ubii6kukovuc0hl2e8myxx&limit=50&category=clothing/men&includes=MainImage")
        .success(function(data){
          etsy.results = data.results;
          console.log(etsy.results);
      });


        
      
    } ]); // END CONTROLLER
    
    app.controller("Cat3Controller",  [ '$http', function($http){
      var etsy = this; 
 
      $http.jsonp("https://openapi.etsy.com/v2/listings/active.js?callback=JSON_CALLBACK&api_key=q4ubii6kukovuc0hl2e8myxx&limit=50&category=art&includes=MainImage")
        .success(function(data){
          etsy.results = data.results;
          console.log(etsy.results);
      });


        
      
    } ]); // END CONTROLLER
    
    app.controller("Cat4Controller",  [ '$http', function($http){
      var etsy = this; 
 
      $http.jsonp("https://openapi.etsy.com/v2/listings/active.js?callback=JSON_CALLBACK&api_key=q4ubii6kukovuc0hl2e8myxx&limit=50&category=geekery&includes=MainImage")
        .success(function(data){
          etsy.results = data.results;
          console.log(etsy.results);
      });


        
      
    } ]); // END CONTROLLER
    
    
    
    
    
    

   
    
    
    
})();



// "https://openapi.etsy.com/v2/listings/active?api_key=q4ubii6kukovuc0hl2e8myxx&includes=MainImage"