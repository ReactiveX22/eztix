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
}

export default new TicketService();
