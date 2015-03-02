class CategoriesController < ApplicationController
	before_action :find_category, only: [:show]

	def index
		@categories = Category.all
	end

	def show

	end
end


private

	def find_category
		@Category = Category.find(params[:id])
	end