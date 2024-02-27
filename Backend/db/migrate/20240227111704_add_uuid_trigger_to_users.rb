class AddUuidTriggerToUsers < ActiveRecord::Migration[7.1]
  def up
    execute <<-SQL
      CREATE TRIGGER `users_before_insert` BEFORE INSERT ON `users`
      FOR EACH ROW BEGIN
        IF NEW.id IS NULL THEN
          SET NEW.id = UUID_TO_BIN(UUID(), true);
        END IF;
      END;
    SQL
  end

  def down
    execute <<-SQL
      DROP TRIGGER `users_before_insert`;
    SQL
  end
end
