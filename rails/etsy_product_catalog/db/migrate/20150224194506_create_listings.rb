class CreateListings < ActiveRecord::Migration
	def change
		create_table :listings do |t|
			t.string :title
			t.string :description
			t.float :price
			t.string :images
			t.string :shop_name
			t.integer :number_of_store_reviews
			t.references :shop
			t.string :shipping_policy
			t.string :refund_policy
			t.boolean :is_supply
			t.string :state
			t.integer :user_id
			t.integer :category_id
			t.float :creation_tsz
			t.integer :quantity
			t.string :tags
			t.string :materials
			t.integer :views
			t.integer :shipping_template_id
			t.string :shipping
			t.boolean :is_customizable
			t.integer :etsy_listing_id
			t.integer :etsy_user_id
			t.integer :shop_section_id
			t.string :who_made
			t.string :when_made



			t.timestamps null: false
		end
	end
end
