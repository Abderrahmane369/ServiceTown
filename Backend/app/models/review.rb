class Review < ApplicationRecord
  belongs_to :service, type: :binary
  belongs_to :user, type: :binary
end
