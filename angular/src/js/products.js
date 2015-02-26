(function(){
    var app = angular.module("BetterThanEtsy", []);
    
//    app.controller('StoreController', ['$http', function($http){
////       this.items = products;
//         var self = this;
//         self.items = [];
//        
//    
//        
//       $http.get('js/etsy.json').succes(function(data) {
//           self.items = data;
//        
//    })
//    } ])

    var products = [{
        title : "Tittle0",
        price : "$5.00",
        description : "This is the most spectacular description of all time. Dont you think?",
        MainImage : [ 
            {
                url_75x75 : "http://lorempixel.com/160/160"
            },
            { 
                url_170x135 : "http://lorempixel.com/160/160"
            }
        ]
    },
        {title : "Tittle1",
        price : "$10.00",
        description : "This is the most spectacular description of all time. Dont you think?",
        MainImage : [ 
            {
                url_75x75 : "http://lorempixel.com/160/160",
            }, 
            {
                url_170x135 : "{{URL}}"
            }]
        }];
    
    app.controller('StoreController', function(){
       this.items = products;
    });
    
    
   
})();