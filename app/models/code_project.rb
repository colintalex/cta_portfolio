class CodeProject < ApplicationRecord
    include Rails.application.routes.url_helpers
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates :github_url, presence: true
    validates :technology, presence: true
    has_many_attached :images

    def get_image_urls
        urls = self.images_blobs.map do |img|
            {url: img.service_url, id: img.id}
        end
        urls
    end
end
