class User < ApplicationRecord
  belongs_to :city, type: :binary
  has_uuid :id
end
