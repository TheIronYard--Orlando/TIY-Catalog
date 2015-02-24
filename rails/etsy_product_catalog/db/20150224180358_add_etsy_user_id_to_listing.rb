class AddEtsyUserIdToListing < ActiveRecord::Migration
  def change
    add_column :listings, :etsy_user_id, :integer
  end
end
