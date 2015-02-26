/* https://openapi.etsy.com/v2/listings/trending?api_key=q4ubii6kukovuc0hl2e8myxx&fields=url,title,description, */
var API = 'https://openapi.etsy.com/v2/listings/trending?api_key=q4ubii6kukovuc0hl2e8myxx'
var data = require('./trending.json')
var _ = require('lodash');
var trending = data.results;

var images = keyChecker("MainImage");
var listing = keyChecker("listing_id");
var description = keyChecker("description") 


function foo(params){
	return _.bind(API)
}


function keyChecker(key){
	return _.map(trending,key)
};


var values = {
	totalResults: trending.length,
	descriptions: keyChecker("description"),
	variations: keyChecker("has_variations")
}

