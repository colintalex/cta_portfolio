class GraphicProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description
  
  attribute :images do |obj|
      obj.get_image_url
  end

end
