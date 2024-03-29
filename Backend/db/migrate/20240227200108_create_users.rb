class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.text :email
      t.text :password
      t.text :phone
      t.references :city, null: false, foreign_key: true
      t.string :role

      t.timestamps
    end
  end
end
