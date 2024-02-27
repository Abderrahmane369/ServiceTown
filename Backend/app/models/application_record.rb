require 'securerandom'
class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
  before_create :generate_uuid
  private
  def generate_uuid
    self.uuid = SecureRandom.uuid
  end
end
