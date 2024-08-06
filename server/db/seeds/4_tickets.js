/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import { generateSeatNumbers } from '../../utils/generateSeatNumbers.js';

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ticket').del();

  await knex.schema.raw('ALTER SEQUENCE ticket_id_seq RESTART WITH 1');

  const coachIds = await knex('coach').select('id');
  const customerIds = await knex('customer').select('id');
  const seat_numbers = generateSeatNumbers(10, 4);

  if (coachIds.length < 1 || customerIds.length < 1) {
    throw new Error('No route IDs found in the database.');
  }

  const tickets = [
    {
      seat_number: seat_numbers[0],
      customer_id: customerIds[0].id,
      coach_id: coachIds[0].id,
    },
    {
      seat_number: seat_numbers[1],
      customer_id: customerIds[2].id,
      coach_id: coachIds[2].id,
    },
    {
      seat_number: seat_numbers[4],
      customer_id: customerIds[1].id,
      coach_id: coachIds[1].id,
    },
  ];

  await knex('ticket').insert(tickets);
}
