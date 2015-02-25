var data = require('./trending.json');
var _ = require('lodash');
var trending = data.results;

function keyChecker(array,key){
	return _.map(array,key)
};
/* https://openapi.etsy.com/v2/taxonomy/seller/get?api_key=q4ubii6kukovuc0hl2e8myxx */
/* https://openapi.etsy.com/v2/listings/trending?api_key=q4ubii6kukovuc0hl2e8myxx&fields=url,title,description, */


var values = {
	totalResults: trending.length,
	descriptions: keyChecker(trending, "description"),
	variations: keyChecker(trending, "variations")
}