import db from '../db/db.js';

class TicketDAO {
  table = 'ticket';

  async createTicket(data) {
    const [id] = await db(this.table).insert(data).returning('id');

    return id;
  }

  async deleteTicket(id) {
    const deletedRows = await db(this.table).where('id', id).del();
    return deletedRows;
  }

  async getTicketById(id) {
    const ticket = await db(this.table).where('id', id).select();
    return ticket;
  }

  async getAllTickets() {
    const tickets = await db(this.table).select();
    return tickets;
  }

  async updateTicket(id, data) {
    const updatedRows = await db(this.table).where('id', id).update(data);
    return updatedRows;
  }

  async getSeatNumbersByCoachId(coachId) {
    const seatNumbers = await db(this.table)
      .where({ coach_id: coachId })
      .select('seat_number');
    return seatNumbers;
  }
}

export default new TicketDAO();
