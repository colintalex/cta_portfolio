class GraphicProject < ApplicationRecord
    include Rails.application.routes.url_helpers
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    has_many_attached :images

    def get_image_url
        if self.images.attached?
            urls = self.images.all.map do |img|
                rails_blob_path(img)
            end
            return urls
        end
    end
end
