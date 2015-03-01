(function () {
    var app = angular.module("BetterThanEtsy", []);


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