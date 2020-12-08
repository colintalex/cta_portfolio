class Api::V1::AdminController < ApplicationController
  def show
    admin = Admin.find(params[:id].to_i)

    render json: AdminSerializer.new(admin)
  end

  def update
    admin = Admin.update(params[:id].to_i, admin_params)
    
    render json: AdminSerializer.new(admin)
  end

  private

  def admin_params
    params.permit(:name, :email, :password)
  end
end
