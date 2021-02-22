class FullstackProject < ApplicationRecord
    include Rails.application.routes.url_helpers
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates :github_url, presence: true
    validates :technology, presence: true
    has_many_attached :images

    def get_image_urls
        self.images.map do |img|
            {url: img.service_url, id: img.id}
        end
    end
end
