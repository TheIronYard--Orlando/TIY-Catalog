class Retsy
	include HTTParty
	base_uri 'https://openapi.etsy.com/v2/'
	# https://openapi.etsy.com/v2/listings/active?limit=100&offset=49900&api_key=hlq9zyrpxmcx4vb4vetw22a8


	def self.listings(which=:active)
		get("/listings/#{which}?limit=100&offset=49900&api_key=hlq9zyrpxmcx4vb4vetw22a8")
	end

	def self.trending(which=:trending)
		get("/listings/#{which}?limit=100&offset=500&api_key=hlq9zyrpxmcx4vb4vetw22a8")
	end

	def self.shop(listing_id)
		get("/shops/listing/#{listing_id}?limit=100&offset=49900&api_key=hlq9zyrpxmcx4vb4vetw22a8")
	end


	def self.images(listing_id)
	 get("/listings/#{listing_id}/images?limit=100&offset=49900&api_key=hlq9zyrpxmcx4vb4vetw22a8")
	end



end