require 'rails_helper'

RSpec.describe "Homepages", type: :request do

  xdescribe "GET /index" do
    xit "returns http success" do
      get "/homepage/index"
      expect(response).to have_http_status(:success)
    end
  end

end
