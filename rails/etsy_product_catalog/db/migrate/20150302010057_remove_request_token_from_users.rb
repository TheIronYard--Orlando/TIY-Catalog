class RemoveRequestTokenFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :request_token, :string
  end
end
