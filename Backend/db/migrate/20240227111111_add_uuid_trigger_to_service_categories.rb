class AddUuidTriggerToServiceCategories < ActiveRecord::Migration[7.1]
  def change
        execute <<-SQL
      CREATE TRIGGER `service_categories_before_insert` BEFORE INSERT ON `service_categories`
      FOR EACH ROW BEGIN
        IF NEW.id IS NULL THEN
          SET NEW.id = UUID_TO_BIN(UUID(), true);
        END IF;
      END;
    SQL
  end
  def down
    execute <<-SQL
      DROP TRIGGER `service_categories_before_insert`;
    SQL
  end
end
