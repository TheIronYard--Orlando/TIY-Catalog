Rails.application.routes.draw do
  resources :listings 
  root 'listings#index'

  get 'authorize' => 'sessions#authorize'
  get 'verify' => 'sessions#verify'

  resources :categories do
  resources :listings
  end

end
