class CreateServices < ActiveRecord::Migration[7.1]
  def change
    create_table :services, id: false do |t|
      t.binary :id, limit: 16, primary_key: true
      t.string :name
      t.float :price
      t.text :description
      t.boolean :availability
      t.binary :service_category_id, limit: 16
      t.binary :user_id, limit: 16

      t.timestamps
    end
    add_foreign_key :services, :service_categories, column: :service_category_id, primary_key: "id"
    add_foreign_key :services, :users, column: :user_id, primary_key: "id"
  end
end
