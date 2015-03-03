class AddRequestTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :request_token, :string
  end
end
