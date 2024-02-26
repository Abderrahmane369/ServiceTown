class CreateServiceCategories < ActiveRecord::Migration[7.1]
  def change
    create_table :service_categories, id: false do |t|
      t.binary :id, limit: 16, primary_key: true
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
