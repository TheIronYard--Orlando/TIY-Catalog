var data = require('./trending.json')
var _ = require('lodash');
var trending = data.results;


function keyChecker(key){
	return _.map(trending,key)
};
/* https://openapi.etsy.com/v2/taxonomy/seller/get?api_key=q4ubii6kukovuc0hl2e8myxx */
/* https://openapi.etsy.com/v2/listings/trending?api_key=q4ubii6kukovuc0hl2e8myxx&fields=url,title,description, */


var values = {
	totalResults: trending.length,
	descriptions: keyChecker("description"),
	variations: keyChecker("has_variations")
}

var images = keyChecker("MainImage");
var listing = keyChecker("listing_id");
var description = keyChecker("description") 

console.log(_.zip(listing,description,images,keyChecker("price")))