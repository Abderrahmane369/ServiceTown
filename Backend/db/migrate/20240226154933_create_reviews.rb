class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews, id: false do |t|
      t.binary :id, limit: 16, primary_key: true
      t.text :description
      t.binary :service_id, limit: 16
      t.binary :user_id, limit: 16

      t.timestamps
    end
    add_foreign_key :reviews, :services, column: :service_id, primary_key: "id"
    add_foreign_key :reviews, :users, column: :user_id, primary_key: "id"
  end
end
