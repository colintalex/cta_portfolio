require 'rails_helper'

RSpec.describe "Admin endpoints", type: :request do
  let(:admin) { Admin.create(
    name: 'Colin',
    email: 'c@email.com',
    password: '123'
  )}

  describe "Get a single admin by id" do
    it "returns a successful response" do
      get "/api/v1/admin/#{admin.id}"

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)

      expect(resp[:data]).to_not eql(nil)
      expect(resp[:data][:attributes]).to have_key(:name)
      expect(resp[:data][:attributes]).to have_key(:email)
    end
  end

  context 'Update an admin with id and body' do
    it "returns a successful response" do
      new_attr = {email: 'colintalex@gmail.com'}
      
      put "/api/v1/admin/#{admin.id}", :params => new_attr

      expect(response).to have_http_status(:success)
      resp = JSON.parse(response.body,:symbolize_names => true)
      
      expect(resp[:data]).to_not eql(nil)
      expect(resp[:data][:attributes]).to have_key(:name)
      expect(resp[:data][:attributes]).to have_key(:email)
    end
  end
end
