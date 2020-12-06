require 'rails_helper'

RSpec.describe GraphicProject, type: :model do
  describe 'Validations' do
    it { should validate_presence_of :title }
    it { should validate_presence_of :description }
    it { should validate_presence_of :image_path }
  end

  it 'is valid with valid attributes' do
    graphic = GraphicProject.new(
      title: 'Title',
      description: 'DESCRIPTION',
      image_path: '../image/path')

    expect(graphic).to be_valid
  end

  it 'is not valid without title' do
    graphic = GraphicProject.new(
      description: 'DESCRIPTION',
      image_path: '../image/path')
      
    expect(graphic).to_not be_valid
  end

  it 'is not valid without description' do
    graphic = GraphicProject.new(
      title: 'Title',
      image_path: '../image/path')
      
    expect(graphic).to_not be_valid
  end

  it 'is not valid without image_path' do
    graphic = GraphicProject.new(
      title: 'Title',
      description: 'DESCRIPTION')
      
    expect(graphic).to_not be_valid
  end
end
