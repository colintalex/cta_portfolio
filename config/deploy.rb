# config valid for current version and patch releases of Capistrano
lock "~> 3.15.0"

set :application, "portfolio-app"
set :repo_url, "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDEa1O9bgk4RQ5nxdVKdIqT+Ol2m9xB4Z8SMB40oWRU012qbTp4FfqIHmcZH6sa/QMt2vCB1aswKFQsNwLljrpucCQGD4kNBshVwCThzBEuUNdKPHawNQc0y3Lwg6npl1w+apQ3idIBPIhpOuV/YBRmoR7Kq5fwCuxCdb2hPU4hx1RCikQLMSu/uFyCAC5MHEfmH2M0b8Y3NFuwyPVyQTEQeOUyS1+R3mgJhta/FDZSWMhvoE+9hiKffFBBFkXrJqc98MRm0VoTBdO8eXDzHkXsHs/Z5XJyFO4FjyGVC6l14yGokHgl0FBGNbYKzSDfq298r2/Vzow/m4/i/mHHw2vdM/M+8JTsacDxXFpdGcZWQssU5HdXHXiCPQ8P+Pk+ta9z51D36AJjgUVRniELwhq+Eoh8uJKyJorKq6iYzMw6K73LMZy0UWhxVtPFklJuZSf2ksE3TEFXCIzR8pEfEwDze+WeYGbCxGQVKLR8m7w6PVNGobYHUi4utgh5QH8viL0= colinalexander@Colins-iMac.local: git@github.com:colintalex/cta_portfolio.git"

# Default branch is :main
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/cta_admin/#{fetch :application}"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "bundle", "public/system", "public/uploads"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure