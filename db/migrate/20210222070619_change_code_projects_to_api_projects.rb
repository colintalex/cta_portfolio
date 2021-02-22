class ChangeCodeProjectsToApiProjects < ActiveRecord::Migration[6.0]
  def change
    rename_table :code_projects, :api_projects
  end
end
