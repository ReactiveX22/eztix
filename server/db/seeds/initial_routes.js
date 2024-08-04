/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('route').del();
  await knex('route').insert([
    {
      name: 'Dhaka-Chittagong',
      start_location: 'Dhaka',
      end_location: 'Chittagong',
    },
    {
      name: 'Mymensingh-Chittagong',
      start_location: 'Mymensingh',
      end_location: 'Chittagong',
    },
    {
      name: 'Chittagong-Mymensingh',
      start_location: 'Chittagong',
      end_location: 'Mymensingh',
    },
  ]);
}
