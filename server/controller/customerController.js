import customerService from '../service/customerService.js';

class CustomerController {
  async createCustomer(req, res) {
    try {
      const id = await customerService.createCustomer(req.body);
      res.status(201).json(id);
    } catch (error) {
      res.status(500);
    }
  }

  async getCustomerById(req, res) {
    try {
      const { id } = req.params;
      const customer = await customerService.getCustomerById(id);
      res.status(201).json(customer);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteCustomer(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await customerService.deleteCustomer(id);
      res.status(201).json(deletedRows);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new CustomerController();
