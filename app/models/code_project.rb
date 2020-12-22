class CodeProject < ApplicationRecord
    include Rails.application.routes.url_helpers
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates :github_url, presence: true
    validates :technology, presence: true
    has_many_attached :images

    def get_image_urls
        urls = self.images.map do |img|
            rails_blob_path(img)
        end
        urls
    end
end
