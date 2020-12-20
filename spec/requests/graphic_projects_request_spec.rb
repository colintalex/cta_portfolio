require 'rails_helper'

RSpec.describe "GraphicProjects", type: :request do

  let(:project) { 
    GraphicProject.create(
      title: 'Title3',
      description: 'Content',
      image_path: '../path'
    )
  }

  before(:each) {
      GraphicProject.create(
      title: 'Title4',
      description: 'Content',
      image_path: '../path'
    )
  }

  
  describe "GET All CodeProjects" do
    it "returns http success" do
      get "/api/v1/graphic_projects"

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)

      expect(resp[:data][0][:attributes]).to have_key(:title)
      expect(resp[:data][0][:attributes]).to have_key(:description)
      expect(resp[:data][0][:attributes]).to have_key(:image_path)
    end
  end

  describe "GET single code project by id" do
    it "returns http success" do
      get "/api/v1/graphic_projects/#{project.id}"

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)

      expect(resp[:data][:attributes]).to have_key(:title)
      expect(resp[:data][:attributes]).to have_key(:description)
      expect(resp[:data][:attributes]).to have_key(:image_path)
    end
  end

  describe "POST Create new graphic project" do
    it "returns http success" do
      data = {
      title: 'Title3',
      description: 'Content',
      image_path: './new/path'
    }
      post "/api/v1/graphic_projects/", :params => {data: data}

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body, :symbolize_names => true)

      expect(resp[:data][:attributes]).to have_key(:title)
      expect(resp[:data][:attributes]).to have_key(:description)
      expect(resp[:data][:attributes]).to have_key(:image_path)

      expect(resp[:data][:attributes][:title]).to eql(data[:title])
      expect(resp[:data][:attributes][:description]).to eql(data[:description])
      expect(resp[:data][:attributes][:image_path]).to eql(data[:image_path])
    end
  end

  describe "PUT update graphic project" do
    it "returns http success" do
    data = {
      title: 'Title3',
      description: 'Content',
      image_path: 'url',
      deploy_url: 'url',
      technology: 'List'
    }
      put "/api/v1/graphic_projects/#{project.id}", :params => {data: data}

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)

      expect(resp[:data][:attributes]).to have_key(:title)
      expect(resp[:data][:attributes]).to have_key(:description)
      expect(resp[:data][:attributes]).to have_key(:image_path)

      expect(resp[:data][:attributes][:title]).to eql(data[:title])
      expect(resp[:data][:attributes][:description]).to eql(data[:description])
      expect(resp[:data][:attributes][:image_path]).to eql(data[:image_path])
    end
  end

  describe "DELETE destroy graphic project" do
    it "returns http success" do
      delete "/api/v1/graphic_projects/#{project.id}"

      expect(response).to have_http_status(:success)
      expect(response.body).to eql('Successfully deleted')
    end
  end

end
