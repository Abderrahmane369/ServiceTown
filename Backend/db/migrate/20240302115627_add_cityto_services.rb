class AddCitytoServices < ActiveRecord::Migration[7.1]
  def change
    add_reference :services, :city, foreign_key: true
  end
end
