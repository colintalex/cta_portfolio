Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    namespace :v1 do

    end
  end

  get '*path', to: 'homepage#index', via: :all  # Allows for React routing setup in index, w/o it triggers a no path warning. 
end
