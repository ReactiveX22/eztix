import db from "../db/db.js";

class CustomerDAO {
  table = "customer";
  async createCustomer(name, phone, password) {
    const [id] = await db(this.table)
      .insert({
        name,
        phone,
        password,
      })
      .returning("id");

    return id;
  }

  async deleteCustomer(id) {
    const deletedRows = await db(this.table).where("id", id).del();
    return deletedRows;
  }
}

export default new CustomerDAO();
