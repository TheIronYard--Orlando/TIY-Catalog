
  Etsy.api_key = ENV["etsy_api_key"]
  Etsy.api_secret = ENV["etsy_api_secret"]
  Etsy.callback_url = "http://localhost:3000/authorize"
  Etsy.permission_scopes = %w(cart_rw shops_rw feedback_r)

