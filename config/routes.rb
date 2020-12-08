Rails.application.routes.draw do
  get 'admin/show'
  get 'admin/edit'
  get 'admin/update'
  root 'homepage#index'

  namespace :api do
    namespace :v1 do
      resources :admin, only: [:show, :edit, :update]
      resources :code_project
      resources :graphic_project
    end
  end

  get '*path', to: 'homepage#index', via: :all  # Allows for React routing setup in index, w/o it triggers a no path warning. 
end
