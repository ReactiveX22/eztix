/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import customersJSON from "../data/customers.json" assert { type: "json" };

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("customer").del();
  // await knex("customer").insert(customersJSON);

  const f10Customers = customersJSON.slice(0, 10);
  await knex("customer").insert(f10Customers);
}
