class UpdateFullstackProjAtts < ActiveRecord::Migration[6.0]
  def change
    add_column :fullstack_projects, :github_url, :string
    add_column :fullstack_projects, :deploy_url, :string
    add_column :fullstack_projects, :technology, :string
  end
end
