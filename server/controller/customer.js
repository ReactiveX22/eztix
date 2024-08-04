import customerService from "../service/customer.js";

class CustomerController {
  async createCustomer(req, res) {
    try {
      const id = await customerService.createCustomer(req.body);
      res.status(201).json(id);
    } catch (error) {
      res.status(500);
    }
  }

  async deleteCustomer(req, res) {
    try {
      const deletedRows = await customerService.deleteCustomer(req.body);
      res.status(201).json(deletedRows);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new CustomerController();
