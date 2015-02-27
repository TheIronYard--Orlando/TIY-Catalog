(function () {
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



    app.controller('StoreController', function () {
        this.items = products;
    });

    var products = [
        {
            title: "Title1",
            price: "$5.00",
            description: "This is the most spectacular description of all time. Dont you think?",
            MainImage: [
                {
                    url_75x75: "http://lorempixel.com/160/160"
                },
                {
                    url_170x135: "http://lorempixel.com/160/160"
                }
            ]
        },
        {
            title: "Title2",
            price: "$10.00",
            description: "This is the most spectacular description of all time. Dont you think?",
            MainImage: [
                {
                    url_75x75: "http://lorempixel.com/160/160",
                },
                {
                    url_170x135: "http://lorempixel.com/160/160"
                }]
        },
        {
            title: "Title3",
            price: "$15.00",
            description: "This is the most spectacular description of all time. Dont you think?",
            MainImage: [
                {
                    url_75x75: "http://lorempixel.com/160/160",
                },
                {
                    url_170x135: "http://lorempixel.com/160/160"
                }]
        },

        {
            title: "Title4",
            price: "$20.00",
            description: "This is the most spectacular description of all time. Dont you think?",
            MainImage: [
                {
                    url_75x75: "http://lorempixel.com/160/160",
                },
                {
                    url_170x135: "http://lorempixel.com/160/160"
                }]
        },

        {
            title: "Title5",
            price: "$25.00",
            description: "This is the most spectacular description of all time. Dont you think?",
            MainImage: [
                {
                    url_75x75: "http://lorempixel.com/160/160",
                },
                {
                    url_170x135: "http://lorempixel.com/160/160"
                }]
        },
        {
            title: "Title6",
            price: "$30.00",
            description: "This is the most spectacular description of all time. Dont you think?",
            MainImage: [
                {
                    url_75x75: "http://lorempixel.com/160/160",
                },
                {
                    url_170x135: "http://lorempixel.com/160/160"
                }]
        }

        ];

    
})();