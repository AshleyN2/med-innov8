class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :patient_name
      t.integer :age
      t.string :gender
      t.string :diagnosis

      t.timestamps
    end
  end
end
