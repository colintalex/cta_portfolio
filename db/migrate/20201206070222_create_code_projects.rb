class CreateCodeProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :code_projects do |t|
      t.string :title
      t.string :description
      t.string :github_url
      t.string :deploy_url
      t.string :image_path
      t.string :technology

      t.timestamps
    end
  end
end
