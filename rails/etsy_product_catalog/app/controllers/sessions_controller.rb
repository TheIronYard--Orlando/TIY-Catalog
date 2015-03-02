class SessionsController < ApplicationController

  def verify
    request_token = Etsy.request_token
    session[:request_token]  = request_token.token
    session[:request_secret] = request_token.secret
    redirect_to Etsy.verification_url
  end 

  def authorize
    access_token = Etsy.access_token(
    session[:request_token],
    session[:request_secret],
    params[:oauth_verifier])
    user = User.create(oauth_token: (params[:oauth_token]), 
                       oauth_verifier: (params[:oauth_verifier]))
    @current_user = User.where(oauth_verifier: [:oauth_verifier]).first
      if @current_user && @current_user.authenticate(:oauth_token)
        session[:user_id] = new_user.id
        redirect_to Etsy.callback_url
      end
  end
  
end

