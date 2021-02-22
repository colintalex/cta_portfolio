class AddChallengesToFullstackProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :fullstack_projects, :challenges, :string
  end
end
