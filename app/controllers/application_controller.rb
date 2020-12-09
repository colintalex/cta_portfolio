class ApplicationController < ActionController::Base
    def session_admin
        decoded_hash = decoded_token
        if decoded_hash
            admin_id = decoded_hash[0]['admin_id']
            @admin = Admin.find_by(id: admin_id)
        else
            nil
        end
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, 'secret', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                []
            end
        end
    end
end
