class Listing < ActiveRecord::Base
 has_many :images, foreign_key: "etsy_listing_id"
 #belongs_to :category, class_name: Category

 	def main_image
 		Image.where(etsy_listing_id: etsy_listing_id).first.url_fullxfull
 	end

end
