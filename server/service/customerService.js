import customerDAO from '../dao/customerDao.js';

class CustomerService {
  createCustomer(customerDto) {
    const { name, phone, password } = customerDto;
    return customerDAO.createCustomer(name, phone, password);
  }

  getAllCustomers() {
    return customerDAO.getAllCustomers();
  }

  deleteCustomer(customerDto) {
    const id = customerDto;
    return customerDAO.deleteCustomer(id);
  }

  getCustomerById(customerDto) {
    const id = customerDto;
    return customerDAO.getCustomerById(id);
  }

  getCustomerByPhone(customerDto) {
    const phone = customerDto;
    return customerDAO.getCustomerByPhone(phone);
  }

  updateCustomer(customerDto) {
    const { id, data } = customerDto;
    return customerDAO.updateCustomer(id, data);
  }
}

export default new CustomerService();
