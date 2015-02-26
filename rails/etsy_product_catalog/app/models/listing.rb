class Listing < ActiveRecord::Base
 has_many :images, foreign_key: :etsy_listing_id



end
