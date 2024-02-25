class Service < ApplicationRecord
  belongs_to :service_category
  belongs_to :user
end
