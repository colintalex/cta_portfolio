Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    namespace :v1 do
      resources :admin, only: [:show, :edit, :update]
      resources :code_projects
      resources :graphic_projects

      namespace :admin do
        post '/login', to: 'auth#login'
        post '/auto-login', to: 'auth#auto_login'
      end
    end
  end

  get '*path', to: 'homepage#index', via: :all  # Allows for React routing setup in index, w/o it triggers a no path warning. 
end
