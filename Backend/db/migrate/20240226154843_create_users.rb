class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users, id: false do |t|
      t.binary :id, limit: 16, primary_key: true
      t.binary :city_id, limit: 16
      t.string :name
      t.text :email
      t.text :password
      t.text :phone

      t.timestamps
    end

    add_foreign_key :users, :cities, column: :city_id, primary_key: "id"
  end
end