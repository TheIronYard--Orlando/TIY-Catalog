class RemoveUserIdFromShop < ActiveRecord::Migration
  def change
		remove_column :shops, :user_id
  end
end
