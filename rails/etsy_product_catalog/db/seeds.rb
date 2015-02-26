#etsy = Etsy.new
trending = Retsy.trending
listings = Retsy.listings

# shops = etsy.shops

Listing.delete_all
Shop.delete_all
Image.delete_all
1000.times do |n|
	while Shop.count < 1000 do


		listings['results'].each do |listing|
			Listing.find_by_etsy_listing_id(listing['listing_id']) ||
				Listing.create(title:           listing['title'],
				               description:     listing['description'],
				               price:           listing['price'],
				               state:           listing['state'],
				               category_id:     listing['category_id'],
				               is_supply:       listing['is_supply'],
				               is_customizable: listing['is_customizable'],
				               etsy_listing_id: listing['listing_id'],
				               etsy_user_id:    listing['user_id'],
				               currency:        listing['currency_code'],
				               quantity:        listing['quantity'],
				               tags:            listing['tags'],
				               materials:       listing['materials'],
				               shop_section_id: listing['shop_section_id'],
				               who_made:        listing['who_made'],
				               when_made:       listing['when_made'],
				               views:           listing['views'],
				               creation_tsz:    listing['creation_tsz'],
				)

			listing_id = listing['listing_id']


			images = Retsy.images(listing_id)
			# images =  HTTParty.get("https://openapi.etsy.com/v2/listings/#{listing_id}/images?limit=100&offset=49900&api_key=hlq9zyrpxmcx4vb4vetw22a8")
			images['results'].each do |image|
				Image.find_by_listing_image_id(listing['listing_image_id']) ||
					Image.create(
						listing_image_id: image['listing_image_id'],
						etsy_listing_id:  image['listing_id'],
						url_75x75:        image['url_75x75'],
						rank:             image['rank'],
						url_fullxfull:    image['url_fullxfull'],
						url_170x135:      image['url_170x135'],
						full_height:      image['full_height'],
						full_width:       image['full_width'],
					)

			end


			shop  = Retsy.shop(listing_id)
			result=shop['results']['0']
			Shop.find_by_shop_name(result['shop_name']) ||
				Shop.create(
					title:                   result['title'],
					etsy_user_id:            result['user_id'],
					shop_name:               result['shop_name'],
					listing_active_count:    result['listing_active_count'],
					login_name:              result['login_name'],
					policy_welcome:          result['policy_welcome'],
					policy_payment:          result['policy_payment'],
					policy_shipping:         result['policy_shipping'],
					policy_refunds:          result['policy_refunds'],
					policy_additional:       result['policy_additional'],
					policy_seller_info:      result['policy_seller_info'],
					shop_banner:             result['image_url_760x100'],
					accepts_custom_requests: result['accepts_custom_requests'],
					currency_code:           result['currency_code'],
					num_favorites:           result['num_favorers'],


				)

		end

	end
end


