class Etsy
	include HTTParty
	base_uri 'https://openapi.etsy.com/v2/'


	def self.listings(which=:active)
		get("/listings/#{which}?limit=100&offset=49900&api_key=#{api_key}")
	end

	def self.trending(which=:trending)
		get("/listings/#{which}?limit=100&offset=500&api_key=#{api_key}")
	end

	def self.shop(listing_id)
		get("/shops/listing/#{listing_id}?limit=100&offset=49900&api_key=#{api_key}")
	end

	def self.images(listing_id)
	 	get("/listings/#{listing_id}/images?limit=100&offset=49900&api_key=#{api_key}")
  end

end
