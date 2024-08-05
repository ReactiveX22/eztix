import db from '../db/db.js';

class CustomerDAO {
  table = 'customer';

  async createCustomer(name, phone, password) {
    const [id] = await db(this.table)
      .insert({
        name,
        phone,
        password,
      })
      .returning('id');

    return id;
  }

  async deleteCustomer(id) {
    const deletedRows = await db(this.table).where('id', id).del();
    return deletedRows;
  }

  async getCustomerById(id) {
    const customer = await db(this.table).where('id', id).select();
    return customer;
  }

  async getAllCustomers() {
    const customer = await db(this.table).select();
    return customer;
  }

  async updateCustomer(id, data) {
    const updatedRows = await db(this.table).where('id', id).update(data);
    return updatedRows;
  }
}

export default new CustomerDAO();
