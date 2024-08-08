/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { generateSeatNumbers } from '../../utils/generateSeatNumbers.js';

export function up(knex) {
  const seat_numbers = generateSeatNumbers(10, 4); // 10 rows, 4 seats per row

  return knex.schema.createTable('ticket', (table) => {
    table.increments('id');
    table.enu('seat_number', seat_numbers).notNullable();
    table.timestamps(true, true);

    table.integer('customer_id').unsigned().notNullable();
    table.integer('coach_id').unsigned().notNullable();

    table
      .foreign('customer_id')
      .references('id')
      .inTable('customer')
      .onDelete('CASCADE');
    table
      .foreign('coach_id')
      .references('id')
      .inTable('coach')
      .onDelete('CASCADE');

    table.unique(['seat_number', 'coach_id']);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('ticket');
}
