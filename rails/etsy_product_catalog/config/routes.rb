Rails.application.routes.draw do
  resources :listings 
  root 'listings#index'

  get 'verify' => 'sessions#verify'
  get 'authorize' => 'sessions#authorize'
  

end
