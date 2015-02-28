(function () {
    var app = angular.module("BetterThanEtsy", []);

    //    app.controller('StoreController', ['$http', function ($http) {
    //        //       this.items = products;
    //        var self = this;
    //        self.items = [];
    //        this.selectTab = function (setTab) {
    //                self.tab = setTab;
    //            console.log(self.tab)
    //            }
    //
    //            this.isSelected = function (nextTab) {
    //                return self.tab === nextTab;
    //            }
    //
    //
    //        $http.get('js/etsy.json').success(function (data) {
    //
    //            self.items = data.results;
    //
    //        })
    //            }]);
    app.controller('StoreController', function () {

        var self = this;
        this.items = products;

        this.tab = 1;

        this.selectTab = function (setTab) {
            self.tab = setTab;
            console.log(self.tab)
        }

        this.isSelected = function (nextTab) {
            return self.tab === nextTab;
        }
    });


    //        app.controller('TabController', function () {
    //                this.tab = 1;
    //                this.selectTab = function (setTab) {
    //                    this.tab = setTab;
    //                }
    //
    //                this.isSelected = 1;
    //            }
    //
    //        });

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
                    }];
})();