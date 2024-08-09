/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('route', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('start_location').notNullable();
    table.string('end_location').notNullable();
    table.timestamps(true, true);

    table.unique(['start_location', 'end_location']);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('route');
}
