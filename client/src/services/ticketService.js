import { api, endPoints } from './apiService';

class TicketService {
  fetchSeatNumbersByCoach = async (id) => {
    try {
      const data = (await api.get(endPoints.tickets.seatNumbersByCoachId(id)))
        .data;
      return data;
    } catch (error) {
      throw new Error('Error fetching routes!');
    }
  };

  createTicket = async (ticketData) => {
    try {
      const response = await api.post(endPoints.tickets.create, ticketData);
      return response.data;
    } catch (error) {
      throw new Error('Error creating ticket!');
    }
  };

  fetchTicketsByCustomer = async (customerId) => {
    try {
      const response = await api.get(
        endPoints.tickets.ticketsByCustomerId(customerId)
      );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching user tickets!');
    }
  };
}

export default new TicketService();
