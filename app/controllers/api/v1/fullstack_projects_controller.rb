class Api::V1::FullstackProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token #Remove after 3rd party request testing (Postman)

  def index
    fullstack_projects = FullstackProject.all
    render json: FullstackProjectSerializer.new(fullstack_projects)
  end

  def show
    fullstack_project = FullstackProject.find(params[:id].to_i)

    if fullstack_project
      render json: FullstackProjectSerializer.new(fullstack_project)
    else
      # render errors here
    end
  end

  def create
    project = FullstackProject.new(project_params)
    image_params[:images] && image_params[:images].each do |img|
      img.class == ActionDispatch::Http::UploadedFile ? project.images.attach(img) : next
    end
    if project.save
      render json: FullstackProjectSerializer.new(project)
    else
      render json: {error: 'error'}
    end
  end

  def update
    fullstack_project = FullstackProject.find(params[:id].to_i)
    if image_params[:images] then
      integer_ids = image_params[:images].map(&:to_i)
      to_be_destroyed = fullstack_project.images.find(integer_ids)
      to_be_destroyed.each(&:purge)
    elsif params[:images].present? then
      fullstack_project.images[0].purge
    end
    fullstack_project.update!(project_params)
    if fullstack_project.save!
      render json: FullstackProjectSerializer.new(fullstack_project)
    else
      # errors here
    end
  end

  def destroy
    fullstack_project = FullstackProject.find(params[:id].to_i)
    if fullstack_project
      fullstack_project.destroy
      render json: 'Successfully deleted'
    else
      # errors
    end
  end

  private

  def project_params
    params.permit(:title, :description, :github_url, :deploy_url, :technology)
  end

  def image_params
    params.permit(images: [])
  end
end
