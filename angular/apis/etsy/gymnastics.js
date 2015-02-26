var data = require('./trending.json');
var _ = require('lodash');
var trending = data.results;

/**
 * These are the pieces we need to construct an API call to Etsy.
 */
var API = {
	scheme: 'https',
	host: 'openapi.etsy.com',
	base: '/v2',
	path: '/listings/trending.json',
	params: {
		api_key: 'q4ubii6kukovuc0hl2e8myxx',
		includes: 'MainImage',
		fields: 'id,description,title,price'
	},
};

/**
 * @param Object API representing pieces of a full URL
 * @return String URL for the provided API
 * @see http://nodejs.org/api/url.html for better ideas
 */
function urlFor(API){
	// See http://lodash.com/docs#template
	var tpl = _.template('${scheme}://${host}${base}${path}?${params}');

	var params = _.map(API.params, function(value, key){
		return key + '=' + value;
	}).join('&');

	// See http://lodash.com/docs#extend
	return tpl(_.extend({ }, API, { params: params }));
}

// Gimme the URL for the API, as-is...
console.log(urlFor(API));

// Now gimme the `localhost` version...
// See http://lodash.com/docs#extend
console.log(urlFor(_.extend({ }, API, {
  host: 'localhost',
  base: '/apis/etsy'
})));

/* product ID in each of the trending items in the call */
function productId(array){
	for(i = 0; i < array.length ; i++ ){
		id.push(array[i].listing_id)
	}
}

/* Grabs the FULL image from each of the trending items in the call */
function imageFull(array){
	for(i = 0; i < array.length ; i++ ){
		console.log(array[i].MainImage.url_fullxfull)
	}
}

/* Grabs the SMALL image from each of the trending items in the call */
function imageSmall(array){
	for(i = 0; i < array.length ; i++ ){
		console.log(array[i].MainImage.url_170x135)
	}
}

/* The currency codes for @mfees peace of mind */
function currencyCode(array){
	for(i = 0; i < array.length ; i++ ){
		console.log(array[i].currency_code);
	}
}
productId(trending)
