class RemoveColumnsFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :oauth_verifier, :string
    remove_column :users, :oauth_token, :string
    remove_column :users, :listing, :string
    remove_column :users, :shop, :string
  end
end
