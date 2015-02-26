Rails.application.routes.draw do
  resources :listings 
  root 'listings#index'
	 resources :sessions
  
end
