class Etsy
	include HTTParty
	base_uri 'https://openapi.etsy.com/v2/'

	def initialize

	end

	# which can be :friends, :user or :public
	# options[:query] can be things like since, since_id, count, etc.


	def listings(which=:active)
		self.class.get("/listings/#{which}?limit=100&offset=250&api_key=hlq9zyrpxmcx4vb4vetw22a8")
	end

	def trending(which=:trending)
		self.class.get("/listings/#{which}?limit=100&offset=250&api_key=hlq9zyrpxmcx4vb4vetw22a8")
	end

	def shop(which=:etsy_shop_id)
	  self.class.get("/shops/#{which}?limit=100&offset=250&api_key=hlq9zyrpxmcx4vb4vetw22a8")
	end


end
