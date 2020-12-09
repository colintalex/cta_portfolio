class ChangeAdminPasswordtoPasswordDigest < ActiveRecord::Migration[6.0]
  def change
    rename_column :admins, :password, :password_digest
  end
end
