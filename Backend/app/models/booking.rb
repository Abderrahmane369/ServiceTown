class Booking < ApplicationRecord
  belongs_to :service, type: :binary
  belongs_to :user, type: :binary
  has_uuid :id
end
