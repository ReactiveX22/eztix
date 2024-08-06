/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('coach', (table) => {
    table.increments('id');
    table.decimal('price', 7, 2).notNullable();
    table.timestamp('departure_time').notNullable();
    table.timestamps(true, true);

    table.integer('route_id').unsigned().notNullable();

    table
      .foreign('route_id')
      .references('id')
      .inTable('route')
      .onDelete('CASCADE');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('coach');
}
