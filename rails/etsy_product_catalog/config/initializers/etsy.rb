Etsy.api_key = ENV['etsy_api_key']
Etsy.api_secret = ENV['etsy_api_secret']

if Rails.env.development?
	Etsy.callback_url = 'localhost:3000/authorize'
else
	Etsy.callback_url = 'http://thatguysetsysite.com/authorize'
end