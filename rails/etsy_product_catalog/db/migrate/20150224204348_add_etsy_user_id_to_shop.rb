class AddEtsyUserIdToShop < ActiveRecord::Migration
  def change
    add_column :shops, :etsy_user_id, :integer
  end
end
