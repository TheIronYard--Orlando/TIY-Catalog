Rails.application.routes.draw do
  resources :listings 
  root 'listings#index'

  get 'sessions#verify'
  get 'sessions#authorize'

end
