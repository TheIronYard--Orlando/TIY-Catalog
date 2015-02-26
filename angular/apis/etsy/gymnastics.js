/* https://openapi.etsy.com/v2/listings/trending?api_key=q4ubii6kukovuc0hl2e8myxx&fields=url,title,description, */
var API = 'https://openapi.etsy.com/v2/listings/trending?api_key=q4ubii6kukovuc0hl2e8myxx&fields=';
var data = require('./trending.json');
var _ = require('lodash');
var trending = data.results;

/* When calling this function, feed it a string with no spaces and the fields seperated by commas */
function fields(data){
	return API+data;

}
console.log(fields('url,title,description'))

/* Grabs the FULL image from each of the trending items in the call */

function imageFull(array){
	for(i = 0; i < array.length ; i++ ){
		console.log(array[i].MainImage.url_fullxfull)
	}
}
function imageSmall(array){
	for(i = 0; i < array.length ; i++ ){
		console.log(array[i].MainImage.url_170x135)
	}
}