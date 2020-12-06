require 'rails_helper'

RSpec.describe CodeProject, type: :model do
describe 'Validations' do
    it { should validate_presence_of :title }
    it { should validate_presence_of :description }
    it { should validate_presence_of :github_url }
    it { should validate_presence_of :technology }
  end

  it 'is valid with valid attributes' do
    code_project = CodeProject.new(
      title: 'Title',
      description: 'DESCRIPTION',
      github_url: 'github.com/project',
      technology: 'Ruby, Rails, PostgresQL')
      
    expect(code_project).to be_valid
  end

  it 'is not valid without title' do
    code_project = CodeProject.new(
      description: 'DESCRIPTION',
      github_url: 'github.com/project',
      technology: 'Ruby, Rails, PostgresQL')
      
    expect(code_project).to_not be_valid
  end

  it 'is not valid without description' do
    code_project = CodeProject.new(
      title: 'Title',
      github_url: 'github.com/project',
      technology: 'Ruby, Rails, PostgresQL')
      
    expect(code_project).to_not be_valid
  end

  it 'is not valid without github_url' do
    code_project = CodeProject.new(
      title: 'Title',
      description: 'DESCRIPTION',
      technology: 'Ruby, Rails, PostgresQL')
      
    expect(code_project).to_not be_valid
  end

  it 'is not valid without technology' do
    code_project = CodeProject.new(
      title: 'Title',
      description: 'DESCRIPTION',
      github_url: 'github.com/project')
      
    expect(code_project).to_not be_valid
  end
end
