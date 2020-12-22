Rails.application.routes.draw do
  root 'homepage#index'
  mount ActiveStorage::Engine, at: '/'

  namespace :api do
    namespace :v1 do
      resources :admin, only: [:show, :edit, :update]
      resources :code_projects
      resources :graphic_projects

      namespace :auth do
        post '/login', to: 'auth#login'
        post '/auto-login', to: 'auth#auto_login'
      end
    end
  end
  get '*path', to: 'homepage#index', via: :all, constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
  # Allows for React routing setup in index, w/o it triggers a no path warning. 
end
