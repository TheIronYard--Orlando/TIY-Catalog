var _ = require('lodash')
  , assert = require('chai').assert

var data = require('./trending.json')
  , trending = transform(data);

function transform(data){
	return _.map(data.results, function(listing){
		return {
			id: listing.listing_id,
			image: listing.MainImage,
			title: listing.title,
			description: listing.description
		}
	}
}

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

describe('the API', function(){
	it('should have all the parts we need', function(){
		assert.isDefined(API.scheme);
		assert.isDefined(API.host);
		assert.isDefined(API.base);
		// etc . . .
	});

	it('should give me the correct default URL', function(){
		assert.equal(
			'https://openapi.etsy.com/v2/listings/trending.json' +
			'?api_key=q4ubii6kukovuc0hl2e8myxx' +
			'&includes=MainImage' +
			'&fields=id,description,title,price',

			// Gimme the URL for the API, as-is...
			urlFor(API)
		);
	})

	it('should give me the correct URL for localhost, too', function(){
		assert.equal(
			'https://localhost/apis/etsy/listings/trending.json',

			// Now gimme the `localhost` version...
			// See http://lodash.com/docs#extend
			urlFor(_.extend({ }, API, {
			  host: 'localhost',
			  base: '/apis/etsy',
			  params: { }
			}))
		);
	});
}); // describe(the API)

describe('the data from the API', function(){
	it('should have `id` fields for all entries', function(){
		trending.map(function(product){
			assert.isDefined(product.listing_id);
		});
	});
});

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
// productId(trending)
