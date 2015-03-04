class AddEtsyUserIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :etsy_user_id, :integer
  end
end
