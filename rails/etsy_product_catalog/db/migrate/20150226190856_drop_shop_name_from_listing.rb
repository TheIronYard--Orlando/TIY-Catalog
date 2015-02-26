class DropShopNameFromListing < ActiveRecord::Migration
  def change
		remove_column :listings, :shop_name
		remove_column :listings, :shop_id
		remove_column :listings, :shipping_policy
		remove_column :listings, :refund_policy
		remove_column :listings, :images
		remove_column :listings, :user_id
		remove_column :listings, :shipping_template_id
		remove_column :listings, :shipping
  end
end
