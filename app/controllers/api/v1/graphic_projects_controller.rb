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
    if project.save!
      project.images.attach(project_params[:images])
      render json: {project: GraphicProjectSerializer.new(project), images: rails_blob_path(project.images[0])}
    else
      # render errors here
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
    params.permit(:title, :description, :images)
  end
end
