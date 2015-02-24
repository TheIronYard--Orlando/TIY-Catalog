class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :listing
      t.string :shop
      t.string :etsy_user_name
      t.timestamps null: false
    end
  end
end
