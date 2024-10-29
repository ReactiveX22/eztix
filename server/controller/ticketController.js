import ticketService from '../service/ticketService.js';
import TicketService from '../service/ticketService.js';

class TicketController {
  async createTicket(req, res) {
    try {
      const id = await TicketService.createTicket(req.body);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllTickets(req, res) {
    try {
      const allTickets = await TicketService.getAllTickets();
      res.status(200).json(allTickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTicketById(req, res) {
    try {
      const { id } = req.params;
      const ticket = await TicketService.getTicketById(id);
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteTicket(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await TicketService.deleteTicket(id);
      res.status(200).json({ deletedRows });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTicket(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedTicket = await TicketService.updateTicket({ id, data });
      res.status(200).json(updatedTicket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSeatNumbersByCoachId(req, res) {
    try {
      const { coach_id } = req.params;

      const seatNumbersData = await TicketService.getSeatNumbersByCoachId(
        coach_id
      );
      const seatNumbers = seatNumbersData.map((ticket) => ticket.seat_number);

      res.status(200).json([{ seat_numbers: seatNumbers }]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserTickets(req, res) {
    try {
      const customerId = req.params.customerId;
      const results = await ticketService.getAllTicketsByUserId(customerId);
      const response = {};

      results.forEach((row) => {
        const coachId = row.coach_id;

        response[coachId] = {
          start_location: row.start_location,
          end_location: row.end_location,
          seats: results
            .filter((ticket) => ticket.coach_id === coachId)
            .map((ticket) => ticket.seat_number),
          departure_time: row.departure_time,
          price: row.price,
          total_price:
            row.price *
            results.filter((ticket) => ticket.coach_id === coachId).length,
        };
      });

      res.json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTicketsByCustomerAndCoach(req, res) {
    try {
      const customerId = req.params.customerId;
      const coachId = req.params.coachId;

      const results = await ticketService.getTicketsByCustomerAndCoach({
        customerId,
        coachId,
      });

      if (results.length === 0) {
        return res.status(404).json({ message: 'No tickets found' });
      }

      const seats = results.map((ticket) => ticket.seat_number).join(', ');
      const totalFare = (results[0].price * results.length).toFixed(2);

      const response = {
        customer_phone: results[0].phone,
        coach_id: results[0].coach_id,
        departure_time: results[0].departure_time,
        start_location: results[0].start_location,
        end_location: results[0].end_location,
        seats: seats,
        seats_fare: results[0].price,
        total_fare: totalFare,
      };

      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Internal server error', error: error.message });
    }
  }
}

export default new TicketController();
