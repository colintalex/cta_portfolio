class AddChallengesToApiProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :api_projects, :challenges, :string
  end
end
