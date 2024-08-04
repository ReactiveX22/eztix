import customerDAO from "../dao/customer.js";

class CustomerService {
  createCustomer(customerDto) {
    const { name, phone, password } = customerDto;
    return customerDAO.createCustomer(name, phone, password);
  }

  deleteCustomer(customerDto) {
    const { id } = customerDto;
    return customerDAO.deleteCustomer(id);
  }
}

export default new CustomerService();
