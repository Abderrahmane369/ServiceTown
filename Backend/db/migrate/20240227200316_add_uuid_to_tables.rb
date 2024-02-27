class AddUuidToTables < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :uuid, :string
    add_column :cities, :uuid, :string
    add_column :services, :uuid, :string
    add_column :bookings, :uuid, :string
    add_column :reviews, :uuid, :string
    add_column :service_categories, :uuid, :string
  end
end
