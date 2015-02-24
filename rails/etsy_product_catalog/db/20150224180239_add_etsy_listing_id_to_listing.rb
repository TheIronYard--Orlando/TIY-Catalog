class AddEtsyListingIdToListing < ActiveRecord::Migration
  def change
    add_column :listings, :etsy_listing_id, :integer
  end
end
