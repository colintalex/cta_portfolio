require 'rails_helper'

RSpec.describe "Admins", type: :request do

  describe "GET api/v1/show" do
    it "returns http success" do
      get "/api/v1/admin"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /edit" do
    it "returns http success" do
      get "/api/v1/admin/1/edit"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/api/v1/admin/1/update"
      expect(response).to have_http_status(:success)
    end
  end

end
