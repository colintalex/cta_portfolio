class Api::V1::ApiProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token #Remove after 3rd party request testing (Postman)

  def index
    api_projects = ApiProject.all

    render json: ApiProjectSerializer.new(api_projects)
  end

  def show
    api_project = ApiProject.find(params[:id].to_i)

    if api_project
      render json: ApiProjectSerializer.new(api_project)
    else
      # render errors here
    end
  end

  def create
    project = ApiProject.new(project_params)
    image_params[:images] && image_params[:images].each do |img|
      img.class == ActionDispatch::Http::UploadedFile ? project.images.attach(img) : next
    end
    if project.save
      render json: ApiProjectSerializer.new(project)
    else
      # render errors here
    end
  end

  def update
    api_project = ApiProject.find(params[:id].to_i)
    if image_params[:images] then
      integer_ids = image_params[:images].map(&:to_i)
      to_be_destroyed = api_project.images.find(integer_ids)
      to_be_destroyed.each(&:purge)
    elsif params[:images].present? then
      api_project.images[0].purge ## FIXX WILL DELETE FINAL IMG IF NOT CHECKED IN A SUBMIT
    end
    api_project.update(project_params)
    if api_project.save
      render json: ApiProjectSerializer.new(api_project)
    else
      # errors here
    end
  end

  def destroy
    api_project = ApiProject.find(params[:id].to_i)
    if api_project
      api_project.destroy
      render json: 'Successfully deleted'
    else
      # errors
    end
  end

  private

  def project_params
    params.permit(:title, :description, :github_url, :deploy_url, :technology, :challenges)
  end

  def image_params
    params.permit( images: [] )
  end
end
