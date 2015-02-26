# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150226192628) do

  create_table "images", force: :cascade do |t|
    t.integer  "listing_image_id"
    t.integer  "etsy_listing_id"
    t.integer  "rank"
    t.string   "url_75x75"
    t.string   "url_fullxfull"
    t.string   "url_170x135"
    t.integer  "full_height"
    t.integer  "full_width"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "listings", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.float    "price"
    t.integer  "number_of_store_reviews"
    t.boolean  "is_supply"
    t.string   "state"
    t.integer  "category_id"
    t.float    "creation_tsz"
    t.integer  "quantity"
    t.string   "tags"
    t.string   "materials"
    t.integer  "views"
    t.boolean  "is_customizable"
    t.integer  "etsy_listing_id"
    t.integer  "etsy_user_id"
    t.integer  "shop_section_id"
    t.string   "who_made"
    t.string   "when_made"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "currency"
  end

  create_table "shops", force: :cascade do |t|
    t.string   "shop_name"
    t.string   "title"
    t.string   "currency_code"
    t.integer  "listing_active_count"
    t.string   "login_name"
    t.boolean  "accepts_custom_requests"
    t.string   "policy_welcome"
    t.string   "policy_payment"
    t.string   "policy_shipping"
    t.string   "policy_refunds"
    t.string   "policy_additional"
    t.string   "policy_seller_info"
    t.string   "shop_banner"
    t.integer  "num_favorites"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.integer  "etsy_user_id"
    t.integer  "etsy_shop_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "listing"
    t.string   "shop"
    t.string   "etsy_user_name"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

end
