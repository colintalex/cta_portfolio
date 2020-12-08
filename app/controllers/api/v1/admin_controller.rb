class Api::V1::AdminController < ApplicationController
  def show
    admin = Admin.find(params[:id].to_i)

    render json: AdminSerializer.new(admin).serialized_json
  end

  def edit
    
  end

  def update

  end

  private

  def admin_params
    params.require(:data).permit(:name, :email, :password)
  end
end
