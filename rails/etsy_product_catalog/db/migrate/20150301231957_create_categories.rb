class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.integer :etsy_category_id
      t.string :name
      t.string :category_name
      t.string :short_name
      t.string :long_name
      t.integer :num_children

      t.timestamps null: false
    end
  end
end
