class AddEtsyShopIdToShop < ActiveRecord::Migration
  def change
    add_column :shops, :etsy_shop_id, :integer
  end
end
