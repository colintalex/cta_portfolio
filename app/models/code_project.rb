class CodeProject < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates :github_url, presence: true
    validates :technology, presence: true
end
