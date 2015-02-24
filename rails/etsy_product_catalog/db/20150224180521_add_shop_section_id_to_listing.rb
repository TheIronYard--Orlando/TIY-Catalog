class AddShopSectionIdToListing < ActiveRecord::Migration
  def change
    add_column :listings, :shop_section_id, :integer
  end
end
