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
}

export default new TicketService();
