# config valid for current version and patch releases of Capistrano
lock "~> 3.15.0"

set :application, "portfolio-app"
set :repo_url, "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC0KhziuZcAaCmS5bWAsb/rHaASUeipyzAc4NFWAsHzhfdwOAhma0MlRalXWsfb2GO3PqTJF1ojsCfphJ7q9+e835lcu8GJtFX3MkglAdlysqg8x+p5KCTiA0uK3wfK1YCoaPqmI///WEaDq3uEd536kq7D1juzpbbEjjRf1YIEZCX441Vj6lN5hFUD974dWMBxuBTKv0k8EjWIhkLpOT4stH7iRKQ5PNJzh6KcS0GeIz+ys6u8/jPFmMq6YxkGWd5KMpr0m17T9EGL8aLTBSwOEtagu7tijxYgDM1s4izyQqeGNIyB77SUAi3nfyS2B3DHbZc6fDdHnYm1qhT84MSa3nRnsIEh3tMq2s6fEoKzTaVwDwu880IcB2cqDIFTfDVEQLji9/6FfIal+BNvEBgMCZeAQ2YO6dDkFHiaunk5S6MsGDG6+t6WfbrU2OTygy5bNzpd6lBbsttnqDIvKHgw0EZgiFSW/6Sca0Luvez67yqdZA0qLIxwuITRgD+fBV0= colinalexander@Colins-iMac.local: git@github.com:colintalex/cta_portfolio.git"

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