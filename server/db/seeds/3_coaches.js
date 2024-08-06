/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('coach').del();

  await knex.schema.raw('ALTER SEQUENCE coach_id_seq RESTART WITH 1');

  const routeIds = await knex('route').select('id');

  if (routeIds.length < 1) {
    throw new Error('No route IDs found in the database.');
  }

  const seedData = [
    {
      price: 950,
      departure_time: '2024-08-07 08:00:00',
    },
    {
      price: 800,
      departure_time: '2024-08-07 10:00:00',
    },
    {
      price: 800,
      departure_time: '2024-08-07 12:00:00',
    },
  ];

  if (seedData.length > routeIds.length) {
    throw new Error('Not enough route IDs for the number of entries.');
  }

  seedData.forEach((entry, index) => {
    entry.route_id = routeIds[index].id;
  });

  await knex('coach').insert(seedData);
}
