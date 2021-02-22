class ChangeGraphicProjectsToFullstackProjects < ActiveRecord::Migration[6.0]
  def change
    rename_table :graphic_projects, :fullstack_projects
  end
end
