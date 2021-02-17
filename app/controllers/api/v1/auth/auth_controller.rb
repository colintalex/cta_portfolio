class Api::V1::Auth::AuthController < ApplicationController
    skip_before_action :verify_authenticity_token #Remove after 3rd party request testing (Postman)
    
    def login
        admin = Admin.find_by(email: admin_params[:email])
        if admin && admin.authenticate(params[:password])
            payload = {admin_id: admin.id}
            admin.token = JWT.encode(payload, Rails.application.credentails.JWT_SECRET) # Hide secret in ENV
            admin.save
            render json: AdminSerializer.new(admin)
        else
            render json: {errors: 'Credentails failed!'}
        end
    end

    def auto_login
        if session_admin
            render json: session_admin
        else
            render json: {errors: 'No Admin Logged In'}
        end
    end

    private

    def admin_params
        params.require(:auth).permit(:email, :password)
    end
end