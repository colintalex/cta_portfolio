class GraphicProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image_path
end
