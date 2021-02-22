require 'rails_helper'

RSpec.describe FullstackProject, type: :model do
  describe 'Validations' do
    it { should validate_presence_of :title }
    it { should validate_presence_of :description }
    
    it 'is valid with valid attributes' do
      graphic = FullstackProject.new(
        title: 'Title',
        description: 'DESCRIPTION',
        github_url: 'github.com/project',
        technology: 'Ruby, Rails, PostgresQL',
        image_path: '../image/path')
  
      expect(graphic).to be_valid
    end
  
    it 'is not valid without title' do
      graphic = FullstackProject.new(
        description: 'DESCRIPTION',
        github_url: 'github.com/project',
        technology: 'Ruby, Rails, PostgresQL',
        image_path: '../image/path')
        
      expect(graphic).to_not be_valid
    end
  
    it 'is not valid without description' do
      graphic = FullstackProject.new(
        title: 'Title',
        github_url: 'github.com/project',
        technology: 'Ruby, Rails, PostgresQL',
        image_path: '../image/path')
        
      expect(graphic).to_not be_valid
    end
  end

  describe 'Attached Images' do
    it 'attaches images within params to a new model' do
      test_image = {io: File.open("public/apple-touch-icon.png"), filename: "apple-touch-icon.png", content_type: "image/png"}

      graphic = FullstackProject.create!(
        title: 'Title',
        description: 'DESCRIPTION',
        github_url: 'github.com/project',
        technology: 'Ruby, Rails, PostgresQL',
        image_path: '../image/path',
        images: [test_image])
        

        expect(graphic).to be_valid
        expect(graphic.images.attached?).to eql(true)
        expect(graphic.images[0].name).to eql('images')
        expect(graphic.images[0].record_type).to eql('FullstackProject')
    end
    
  end
end
