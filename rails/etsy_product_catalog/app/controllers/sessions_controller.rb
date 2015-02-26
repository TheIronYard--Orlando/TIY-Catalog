class SessionsController < ApplicationController

	def verify
		request_token = Etsy.request_token
		session[:request_token]  = request_token.token
		session[:request_secret] = request_token.secret
		redirect Etsy.verification_url
	end

	def authorize
		access_token = Etsy.access_token(
			session[:request_token],
		  session[:request_secret],
		  params[:oauth_verifier]
		)
		session[:access_token] = access_token.token
		session[:access_secret] = access_token.secret
	end

end
