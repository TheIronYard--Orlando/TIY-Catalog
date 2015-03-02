class ListingsController < ApplicationController

	def index
    @listings = Listing.all
    #@current_user = User.where(oauth_verifier: [:oauth_verifier]).first
  end

	def show
    @listing = Listing.find(params[:id])
  end

end
