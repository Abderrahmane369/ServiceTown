class Service < ApplicationRecord
  belongs_to :service_category, type: :binary
  belongs_to :user, type: :binary
  has_uuid :id
end