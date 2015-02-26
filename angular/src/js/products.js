(function(){
    var app = angular.module("BetterThanEtsy", []);
    
    app.controller('StoreController', ['$http', function($http){
//       this.items = products;
         var self = this;
         self.items = [];
        
    
        
       $http.get('js/etsy.json').succes(function(data) {
           self.items = data;
        
    })
    } ])
//    
////    .controller('MainController', [ '$http', function($http){
////      var self = this;
// 
////      $http.get('https://api.github.com/users/al-the-x')
////        .success(function(data){
////          self.user = data;
////      })
////    } ]) // END MainController
//    
//    var products = [{
//        title : "Widget0",
//        price : "$5.00",
//        description : "",
//        MainImage : [ 
//            {url_75x75 : "{{URL}}"},
//            { url_170x135 : "{{URL}}"}
//        ]
//    },
//        {title : "Widget2",
//        price : "$10.00",
//        description : "Anything",
//        MainImage : [ {url_75x75 : "http://lorempixel.com/160/160", url_170x135 : "{{URL}}"}]
//        }];
//    
//    app.controller('StoreController', function(){
//       this.items = products;
//    });
//    
    
   
})();