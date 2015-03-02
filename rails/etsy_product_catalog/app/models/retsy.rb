class Retsy
	include HTTParty
	base_uri 'https://openapi.etsy.com/v2/'
	# https://openapi.etsy.com/v2/listings/active?limit=100&offset=49900&api_key=hlq9zyrpxmcx4vb4vetw22a8
	@api_key = ENV['etsy_api_key']

	def self.listings(which=:active, offset)
		get("/listings/#{which}?limit=100&offset=#{offset}&api_key=#{@api_key}")
	end

	def self.trending(which=:trending,offset)
		get("/listings/#{which}?limit=100&offset=#{offset}&api_key=#{@api_key}")
	end

	def self.shop(listing_id)
		get("/shops/listing/#{listing_id}?limit=10&api_key=#{@api_key}")
	end


	def self.images(listing_id, offset)
	 	get("/listings/#{listing_id}/images?limit=100&offset=#{offset}&api_key=#{@api_key}")
	end

	def self.categories(offset)
		get("/taxonomy/categories?limit=100&offset=#{offset}&api_key=#{@api_key}")
	end

end