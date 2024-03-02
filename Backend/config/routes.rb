Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :bookings, param: :uuid
      resources :reviews, param: :uuid
      resources :services, param: :uuid
      resources :users, param: :uuid
      resources :cities, param: :uuid do
        get 'services', on: :member, action: :show_services, controller: 'cities'
        get 'services/:service_uuid', on: :member, action: :show_service, controller: 'cities'
      end
      resources :service_categories, param: :uuid do
        get ':uuid/services', on: :collection, action: :services_by_category, controller: 'service_categories'
      end
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  # Defines the root path route ("/")
  # root "posts#index"
end
