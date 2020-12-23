class Api::V1::GraphicProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token #Remove after 3rd party request testing (Postman)

  def index
    graphic_projects = GraphicProject.all
    render json: GraphicProjectSerializer.new(graphic_projects)
  end

  def show
    graphic_project = GraphicProject.find(params[:id].to_i)

    if graphic_project
      render json: GraphicProjectSerializer.new(graphic_project)
    else
      # render errors here
    end
  end

  def create
    project = GraphicProject.new(project_params)
    image_params[:images] && image_params[:images].each do |img|
      img.class == ActionDispatch::Http::UploadedFile ? project.images.attach(img) : next
    end
    if project.save
      render json: GraphicProjectSerializer.new(project)
    else
      render json: {error: 'error'}
    end
  end

  def update
    graphic_project = GraphicProject.find(params[:id].to_i)
    if image_params[:images] then
      integer_ids = image_params[:images].map(&:to_i)
      to_be_destroyed = graphic_project.images.find(integer_ids)
      to_be_destroyed.each(&:purge)
    elsif params[:images].present? then
      graphic_project.images[0].purge
    end
    graphic_project.update!(project_params)
    if graphic_project.save!
      render json: GraphicProjectSerializer.new(graphic_project)
    else
      # errors here
    end
  end

  def destroy
    graphic_project = GraphicProject.find(params[:id].to_i)
    if graphic_project
      graphic_project.destroy
      render json: 'Successfully deleted'
    else
      # errors
    end
  end

  private

  def project_params
    params.permit(:title, :description)
  end

  def image_params
    params.permit( images: [] )
  end
end
