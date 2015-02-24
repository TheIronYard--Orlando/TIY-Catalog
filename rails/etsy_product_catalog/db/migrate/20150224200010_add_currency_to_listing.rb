class AddCurrencyToListing < ActiveRecord::Migration
  def change
    add_column :listings, :currency, :string
  end
end
