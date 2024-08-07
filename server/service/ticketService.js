import TicketDAO from '../dao/ticketDao.js';

class TicketService {
  createTicket(ticketDto) {
    return TicketDAO.createTicket(ticketDto);
  }

  getAllTickets() {
    return TicketDAO.getAllTickets();
  }

  deleteTicket(ticketDto) {
    return TicketDAO.deleteTicket(ticketDto);
  }

  getTicketById(ticketDto) {
    return TicketDAO.getTicketById(ticketDto);
  }

  updateTicket(ticketDto) {
    return TicketDAO.updateTicket(ticketDto.id, ticketDto.data);
  }

  getSeatNumbersByCoachId(ticketDto) {
    return TicketDAO.getSeatNumbersByCoachId(ticketDto);
  }
}

export default new TicketService();