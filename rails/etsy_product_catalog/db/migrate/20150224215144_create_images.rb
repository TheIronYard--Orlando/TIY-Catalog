class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :listing_image_id
      t.integer :etsy_listing_id
      t.integer :rank
      t.string :url_75x75
      t.string :url_fullxfull
      t.string :url_170x135
      t.integer :full_height
      t.integer :full_width

      t.timestamps null: false
    end
  end
end
