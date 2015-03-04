class Category < ActiveRecord::Base
  has_many :listings

  def to_title
    name.gsub("_", " ").titleize.gsub("And", "and")
  end

  def category_listings
    Listing.where(etsy_category_id: etsy_category_id)
  end

end
