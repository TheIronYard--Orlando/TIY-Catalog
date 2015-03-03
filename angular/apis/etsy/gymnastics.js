var expect = require('chai').expect;
var assert = require('chai').assert;
var _ = require('lodash');
var url = require('url');

var data = require('./trending.json');

var API = {
    'protocol': 'https',
    'host': 'openapi.etsy.com',
    'base': 'v2',
    'path': 'listings/trending.json',
    // Only use with JSONP...
    // 'pathname': '/v2/listings/trending.js',
    'query': {
        // Only use with JSONP...
        // 'callback': 'JSON_CALLBACK',
        /**
         * @param Number limit number of entries to return
         * @param Number offset number of entries to skip
         */
        'limit': 50, 'offset': 0,
        'api_key': 'q4ubii6kukovuc0hl2e8myxx',
        'fields': 'title,description,price,currency_code',
        'includes': 'MainImage'
    },
};

function urlForAPI(){

    return url.format(_.extend({ }, API, {
        'pathname': API.base + '/' + API.path
    }));
}

/**
 * @param Object data from the Etsy API (raw)
 * @returns Object
 */
function transform(data) {
    return _.map(data.results, function(object) {
        return {
            title: object.title,
            description: object.description,
            price: object.price,
            images: {
            	full: object.MainImage.url_fullxfull,
            	small: object.MainImage.url_170x135
            }
        }
    })
}

it('should produce the correct URL', function(){
    expect(urlForAPI()).to.equal(
        'https://openapi.etsy.com/v2/listings/some-category.json' +
        '?limit=50&offset=0&api_key=q4ubii6kukovuc0hl2e8myxx' +
        '&fields=title%2Cdescription%2Cprice%2Ccurrency_code' +
        '&includes=MainImage'
    );
});


describe('transform', function(){
    describe('given `trending.json` from the API', function(){
        var trending;

        beforeEach(function(){
            // Feed the raw Etsy data to `transform` to get nicer data...
            trending = transform(require('./trending.json'));
        });

        it('should have 50 results', function(){
            assert.equal(trending.length, 50,
                'Because we asked for `limit=50`, right?'
            );
        });
        describe('the fields I expect to have for each listing', function(){
            it('should have a `title` field', function(){
                expect(_.pluck(trending, 'title').length).to.equal(trending.length);
            });

            it('should have a `description` field', function(){
                expect(_.pluck(trending, 'description').length).to.equal(trending.length);
            });

            it.skip('should NOT have a `foo` field', function(){
                expect(_.pluck(trending, 'foo').length).to.equal(0);
            });

            it('should have a `MainImage` field', function(){
                expect(trending[0].images).to.be.a('object');
                expect(trending[0].images.full).to.be.a('string');
                expect(trending[0].images.small).to.be.a('string');
            })
        });
    }); // END describe `trending.json`

    describe('given `some-category.json` from the API', function(){
        var products;

        beforeEach(function(){
            products = transform(require('./some-category.json'));
        });

        describe('everything that `trending.json` has, right?', function(){

        });
    })
});
