var app = angular.module("Etsy", [ ]);



app.controller("TabController", function() {
    this.tab = 1;
    
    this.setTab = function(newTab){
        this.tab = newTab;
    };
    
    this.isSet = function(tabName){
        return this.tab === tabName;
    };
    
});