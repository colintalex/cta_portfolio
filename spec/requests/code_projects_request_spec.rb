require 'rails_helper'

RSpec.describe "CodeProjects", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/code_projects/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/code_projects/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/code_projects/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/code_projects/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/code_projects/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
