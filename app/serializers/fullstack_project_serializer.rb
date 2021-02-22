class FullstackProjectSerializer
  extend Rails.application.routes.url_helpers
  include FastJsonapi::ObjectSerializer
  attributes :title, :description
  
  attribute :images do |obj|
      obj.get_image_urls
  end

end
