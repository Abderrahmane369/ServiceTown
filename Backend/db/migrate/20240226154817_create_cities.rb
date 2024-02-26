class CreateCities < ActiveRecord::Migration[7.1]
  def change
    create_table :cities, id: false do |t|
      t.binary :id, limit: 16, primary_key: true
      t.string :name

      t.timestamps
    end
  end
end
