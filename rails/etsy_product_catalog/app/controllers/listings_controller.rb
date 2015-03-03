class ListingsController < ApplicationController

	def index
    @listings = Listing.all
    @listings = Listing.where(["title LIKE ?", "%#{params[:search]}%"])
  end

	def show
    @listing = Listing.find(params[:id])
  end

end
