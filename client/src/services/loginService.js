import { api, endPoints } from './apiService';

class LoginService {
  getCustomerByPhone = async (phone) => {
    try {
      const data = (await api.get(endPoints.customer.getCustomerByPhone(phone)))
        .data;
      return data;
    } catch (error) {
      throw new Error('Error fetching routes!');
    }
  };
}

export default new LoginService();
