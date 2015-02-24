# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
etsy = Etsy.new
trending = etsy.trending
listings = etsy.listings

trending['results'].each do |listing|
	Listing.create(title: listing['title'], description:listing['description'],
	               price:listing['price'],
	               state:listing['state'],category_id:listing['category_id'],
	               is_supply:listing['is_supply'],
	               is_customizable:listing['is_customizable'],
	               etsy_listing_id:listing['listing_id'],
	               etsy_user_id:listing['user_id'] )

end
