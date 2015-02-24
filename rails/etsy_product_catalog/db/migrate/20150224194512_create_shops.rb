class CreateShops < ActiveRecord::Migration
	def change
		create_table :shops do |t|
			t.string :shop_name
			t.string :title
			t.references :user
			t.string :currency_code
			t.integer :listing_active_count
			t.string :login_name
			t.boolean :accepts_custom_requests
			t.string :policy_welcome
			t.string :policy_payment
			t.string :policy_shipping
			t.string :policy_refunds
			t.string :policy_additional
			t.string :policy_seller_info
			t.string :shop_banner
			t.integer :num_favorites

			t.timestamps null: false
		end
	end
end
