class Api::V1::CodeProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token #Remove after 3rd party request testing (Postman)

  def index
    code_projects = CodeProject.all

    render json: CodeProjectSerializer.new(code_projects)
  end

  def show
    code_project = CodeProject.find(params[:id].to_i)

    if code_project
      render json: CodeProjectSerializer.new(code_project)
    else
      # render errors here
    end
  end

  def create
    project = CodeProject.new(project_params)
    image_params[:images] && image_params[:images].each do |img|
      img.class == ActionDispatch::Http::UploadedFile ? project.images.attach(img) : next
    end
    if project.save
      render json: CodeProjectSerializer.new(project)
    else
      # render errors here
    end
  end

  def update
    code_project = CodeProject.find(params[:id].to_i)
    code_project.update(project_params)
    if code_project.save
      render json: CodeProjectSerializer.new(code_project)
    else
      # errors here
    end
  end

  def destroy
    code_project = CodeProject.find(params[:id].to_i)
    if code_project
      code_project.destroy
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
    params.permit( images: [] )
  end
end
