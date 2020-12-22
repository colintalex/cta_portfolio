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
    image_params[:images].each do |img|
      img.class == ActionDispatch::Http::UploadedFile ? project.images.attach(img) : next
    end

    if project.save!
      render json: {project: GraphicProjectSerializer.new(project)}
    else
      render json: 'ERROR'
    end
  end

  def update
    graphic_project = GraphicProject.find(params[:id].to_i)
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
