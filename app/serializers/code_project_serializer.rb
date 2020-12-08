class CodeProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :github_url, :deploy_url, :image_path, :technology
end
