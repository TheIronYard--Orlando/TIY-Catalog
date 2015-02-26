var APIcall = 'https://openapi.etsy.com/v2/listings/trending?api_key=q4ubii6kukovuc0hl2e8myxx&fields=';
var imageCall = '&includes=MainImage';
var data = require('./trending.json');
var _ = require('lodash');
var trending = data.results;

/* When calling this function, feed it a string with no spaces and the fields seperated by commas */
function apiFields(api,data){
	return api+data+imageCall;
}

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


