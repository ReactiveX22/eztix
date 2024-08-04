/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("customer", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("phone", 20).notNullable().unique();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("customer");
}
