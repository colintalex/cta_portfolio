class GraphicProject < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates :image_path, presence: true
    has_many_attached :images
end
