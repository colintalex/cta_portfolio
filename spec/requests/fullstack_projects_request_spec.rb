require 'rails_helper'

RSpec.describe "FullstackProjects", type: :request do

  let(:project) { 
    FullstackProject.create(
      title: 'Title3',
      description: 'Content',
      github_url: 'url',
      deploy_url: 'url',
      technology: 'List',
      image_path: '../path'
    )
  }

  before(:each) {
      FullstackProject.create(
      title: 'Title4',
      description: 'Content',
      github_url: 'url',
      deploy_url: 'url',
      technology: 'List',
      image_path: '../path'
    )
  }

  
  describe "GET All CodeProjects" do
    it "returns http success" do
      get "/api/v1/fullstack_projects"

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)

      expect(resp[:data][0][:attributes]).to have_key(:title)
      expect(resp[:data][0][:attributes]).to have_key(:description)
      expect(resp[:data][0][:attributes]).to have_key(:github_url)
      expect(resp[:data][0][:attributes]).to have_key(:deploy_url)
      expect(resp[:data][0][:attributes]).to have_key(:technology)
      expect(resp[:data][0][:attributes]).to have_key(:images)
    end
  end

  describe "GET single code project by id" do
    it "returns http success" do
      get "/api/v1/fullstack_projects/#{project.id}"

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)

      expect(resp[:data][:attributes]).to have_key(:title)
      expect(resp[:data][:attributes]).to have_key(:description)
      expect(resp[:data][:attributes]).to have_key(:github_url)
      expect(resp[:data][:attributes]).to have_key(:deploy_url)
      expect(resp[:data][:attributes]).to have_key(:technology)
      expect(resp[:data][:attributes]).to have_key(:images)
    end
  end

  describe "POST Create new graphic project" do
    it "returns http success" do
      data = {
      title: 'Title3',
      description: 'Content',
      github_url: 'url',
      deploy_url: 'url',
      technology: 'List',
      image_path: './new/path'
    }
      post "/api/v1/fullstack_projects/", :params => data

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body, :symbolize_names => true)

      expect(resp[:data][:attributes]).to have_key(:title)
      expect(resp[:data][:attributes]).to have_key(:description)      
      expect(resp[:data][:attributes]).to have_key(:github_url)
      expect(resp[:data][:attributes]).to have_key(:deploy_url)
      expect(resp[:data][:attributes]).to have_key(:technology)
      expect(resp[:data][:attributes]).to have_key(:images)

      expect(resp[:data][:attributes][:title]).to eql(data[:title])
      expect(resp[:data][:attributes][:description]).to eql(data[:description])
      expect(resp[:data][:attributes][:image_path]).to eql(data[:images])
    end
  end

  describe "PUT update graphic project" do
    it "returns http success" do
    data = {
      title: 'Title3',
      description: 'Content',
      image_path: '../path',
      github_url: 'url',
      deploy_url: 'url',
      technology: 'List'
    }
      put "/api/v1/fullstack_projects/#{project.id}", :params => {data: data}

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)

      expect(resp[:data][:attributes]).to have_key(:title)
      expect(resp[:data][:attributes]).to have_key(:description)
      expect(resp[:data][:attributes]).to have_key(:github_url)
      expect(resp[:data][:attributes]).to have_key(:deploy_url)
      expect(resp[:data][:attributes]).to have_key(:technology)
      expect(resp[:data][:attributes]).to have_key(:images)

      expect(resp[:data][:attributes][:title]).to eql(data[:title])
      expect(resp[:data][:attributes][:description]).to eql(data[:description])
      expect(resp[:data][:attributes][:github_url]).to eql(data[:github_url])
      expect(resp[:data][:attributes][:deploy_url]).to eql(data[:deploy_url])
      expect(resp[:data][:attributes][:technology]).to eql(data[:technology])
    end
  end

  describe "DELETE destroy graphic project" do
    it "returns http success" do
      delete "/api/v1/fullstack_projects/#{project.id}"

      expect(response).to have_http_status(:success)
      expect(response.body).to eql('Successfully deleted')
    end
  end

end
