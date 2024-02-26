# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_26_154950) do
  create_table "bookings", id: { type: :binary, limit: 16 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.binary "service_id", limit: 16
    t.binary "user_id", limit: 16
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["service_id"], name: "fk_rails_1707d5de0d"
    t.index ["user_id"], name: "fk_rails_ef0571f117"
  end

  create_table "cities", id: { type: :binary, limit: 16 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", id: { type: :binary, limit: 16 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.text "description"
    t.binary "service_id", limit: 16
    t.binary "user_id", limit: 16
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["service_id"], name: "fk_rails_ad64ae3630"
    t.index ["user_id"], name: "fk_rails_74a66bd6c5"
  end

  create_table "service_categories", id: { type: :binary, limit: 16 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", id: { type: :binary, limit: 16 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.text "description"
    t.boolean "availability"
    t.binary "service_category_id", limit: 16
    t.binary "user_id", limit: 16
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["service_category_id"], name: "fk_rails_3f893384d8"
    t.index ["user_id"], name: "fk_rails_51a813203f"
  end

  create_table "users", id: { type: :binary, limit: 16 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.binary "city_id", limit: 16
    t.string "name"
    t.text "email"
    t.text "password"
    t.text "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "fk_rails_9c7442481a"
  end

  add_foreign_key "bookings", "services"
  add_foreign_key "bookings", "users"
  add_foreign_key "reviews", "services"
  add_foreign_key "reviews", "users"
  add_foreign_key "services", "service_categories"
  add_foreign_key "services", "users"
  add_foreign_key "users", "cities"
end
