class FullstackProjectSerializer
  extend Rails.application.routes.url_helpers
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :github_url, :deploy_url, :image_path, :technology
  
  attribute :images do |obj|
      obj.get_image_urls
  end

  attribute :challenges do |obj|
    obj.challenges.present? ? obj.challenges.split(', ') : obj.challenges
  end

end
