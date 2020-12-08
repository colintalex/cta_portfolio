class AdminSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :token
end
