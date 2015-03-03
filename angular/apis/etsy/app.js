(function(){
    var app = angular.module('tiy-catalog', []);
    app.controller("ProductController", [ '$http', function ($http) {
        
        var self = this;
        var API = {
            scheme: 'https',
            host: 'openapi.etsy.com',
            base: '/v2',
            path: '/listings/trending',
            callback: '.js?callback=JSON_CALLBACK',
            api_key: 'q4ubii6kukovuc0hl2e8myxx',
            includes: 'MainImage',
            fields: 'title,description,price,category_path'
            };
        
        var apiTemplate = _.template("${scheme}://${host}${base}${path}${callback}&api_key=${api_key}&includes=${includes}&fields=${fields}");
        console.log(apiTemplate(API));
    
        $http.jsonp(apiTemplate(API))
        .success(function(data){
            self.trendingProducts = data.results

            
            function productTitle(results) {
                return _.map(results, 'title');
            };
            self.title = productTitle(self.trendingProducts);
            
            function productDescrition(results) {
                return _.map(results, 'description');
            };
            self.description = productDescrition(self.trendingProducts);
            
            function productPrice(results) {
                return _.map(results, 'price');
            };
            self.price = productPrice(self.trendingProducts);
            
            function productCategory(results) {
                return _.map(results, 'category_path');
            };
            self.category_path = productCategory(self.trendingProducts);
            
            function productImageFull() {
                return _.map(self.trendingProducts.MainImage, 'url_fullxfull');
            };
                
            self.full = productImageFull();
            
//            function any(a,b){
//                return _.map(a,b)
//            }
//            any(self.trendingProducts,'title')

        });
    }])    
})();
