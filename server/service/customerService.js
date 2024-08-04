import customerDAO from '../dao/customerDao.js';

class CustomerService {
  createCustomer(customerDto) {
    const { name, phone, password } = customerDto;
    return customerDAO.createCustomer(name, phone, password);
  }

  deleteCustomer(customerDto) {
    const id = customerDto;
    return customerDAO.deleteCustomer(id);
  }

  getCustomerById(customerDto) {
    const id = customerDto;
    return customerDAO.getCustomerById(id);
  }
}

export default new CustomerService();
