class RemoveEtsyUsernNameFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :etsy_user_name, :string
  end
end
