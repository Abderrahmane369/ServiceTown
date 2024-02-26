class User < ApplicationRecord
  belongs_to :city, type: :binary
  has_uuid :id
  validates :role, inclusion: { in: %w(customer seller),
    message: "%{value} is not a valid role" }, case_sensitive: false
end
