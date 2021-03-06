
require 'rails_helper'
RSpec.describe "ApiProjects", type: :request do

  let(:project) {ApiProject.create(
    title: 'Title3',
    description: 'Content',
    github_url: 'url',
    deploy_url: 'url',
    technology: 'List'
  )}

  before(:each) {
    ApiProject.create(
      title: 'Title4',
      description: 'Content',
      github_url: 'url',
      deploy_url: 'url',
      technology: 'List'
    )
  }

  describe "GET All ApiProjects" do
    it "returns http success" do
      get "/api/v1/api_projects"

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
      get "/api/v1/api_projects/#{project.id}"

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

  describe "POST Create new code project" do
    it "returns http success" do
      data = {
      title: 'Title3',
      description: 'Content',
      github_url: 'url',
      deploy_url: 'url',
      technology: 'List'
    }
      post "/api/v1/api_projects/", :params => data

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
      expect(resp[:data][:attributes][:github_url]).to eql(data[:github_url])
      expect(resp[:data][:attributes][:deploy_url]).to eql(data[:deploy_url])
      expect(resp[:data][:attributes][:technology]).to eql(data[:technology])
    end
  end

  describe "PUT update code project" do
    it "returns http success" do
    data = {
      title: 'Title3',
      description: 'Content',
      github_url: 'url',
      deploy_url: 'url',
      technology: 'List'
    }
      put "/api/v1/api_projects/#{project.id}", :params => {data: data}

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)

      expect(resp[:data][:attributes]).to have_key(:title)
      expect(resp[:data][:attributes]).to have_key(:description)
      expect(resp[:data][:attributes]).to have_key(:github_url)
      expect(resp[:data][:attributes]).to have_key(:deploy_url)
      expect(resp[:data][:attributes]).to have_key(:technology)

      expect(resp[:data][:attributes][:title]).to eql(data[:title])
      expect(resp[:data][:attributes][:description]).to eql(data[:description])
      expect(resp[:data][:attributes][:github_url]).to eql(data[:github_url])
      expect(resp[:data][:attributes][:deploy_url]).to eql(data[:deploy_url])
      expect(resp[:data][:attributes][:technology]).to eql(data[:technology])
    end
  end

  describe "DELETE destroy code project" do
    it "returns http success" do
      delete "/api/v1/api_projects/#{project.id}"

      expect(response).to have_http_status(:success)
      expect(response.body).to eql('Successfully deleted')
    end
  end

end
