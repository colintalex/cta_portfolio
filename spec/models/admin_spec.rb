require 'rails_helper'

RSpec.describe Admin, type: :model do
  describe 'Validations' do
    it { should validate_presence_of :name }
    it { should validate_presence_of :email }
    it { should validate_presence_of :password }
  end

  it 'should be valid with attributes' do
    admin = Admin.new(
      name: 'Colin',
      email: 'colin@email.com',
      password: 'password'
    )

    expect(admin).to be_valid
  end

  it 'should not be valid without name' do
    admin = Admin.new(
        email: 'colin@email.com',
        password: 'password'
    )

    expect(admin).to_not be_valid
  end

  it 'should not be valid without email' do
    admin = Admin.new(
        name: 'Colin',
        password: 'password'
    )

    expect(admin).to_not be_valid
  end

  it 'should not be valid without password' do
    admin = Admin.new(
        name: 'Colin',
        email: 'colin@email.com'
    )

    expect(admin).to_not be_valid
  end

  it 'should not be valid with duplicate email' do
    admin1 = Admin.create(
        name: 'Colin',
        email: 'colin@email.com',
        password: 'password'
    )

    admin2 = Admin.new(
        name: 'Rex',
        email: 'colin@email.com',
        password: 'password'
    )

    expect(admin1).to be_valid
    expect(admin2).to_not be_valid
  end
end
