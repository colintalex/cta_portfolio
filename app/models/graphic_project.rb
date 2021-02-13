class GraphicProject < ApplicationRecord
    include Rails.application.routes.url_helpers
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    has_many_attached :images

    def get_image_urls
        self.images.map do |img|
            {url: rails_blob_path(img), id: img.id}
        end
    end
end
