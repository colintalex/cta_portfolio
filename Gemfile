source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.6'


gem 'rails', '~> 6.0.3', '>= 6.0.3.3'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'fast_jsonapi'
gem 'jwt'
gem 'bcrypt'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'image_processing', '~> 1.2'
gem 'rmagick', '~> 4.1.2'
gem "google-cloud-storage", "~> 1.11", require: false

gem 'capistrano', '~> 3.11'
gem 'capistrano-rails', '~> 1.4'
gem 'capistrano-passenger', '~> 0.2.0'
gem 'capistrano-rbenv', '~> 2.1', '>= 2.1.4'

gem 'ed25519', '>= 1.2', '< 2.01'
gem 'bcrypt_pbkdf', '>= 1.0', '< 2.0'

group :development, :test do
  gem 'rspec-rails', '~> 4.0.1'
  gem 'dotenv-rails'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry'
  gem 'capybara'
  gem 'shoulda-matchers'
  gem 'simplecov'
end

group :test do
  gem 'simplecov-shield'
end

group :development do

  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'

  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
