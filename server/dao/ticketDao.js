import db from '../db/db.js';

class TicketDAO {
  table = 'ticket';

  async createTicket(data) {
    const { seat_number, coach_id } = data;

    const id = await db.transaction(
      async (trx) => {
        const existingTicket = await trx(this.table)
          .where({
            seat_number,
            coach_id,
          })
          .first();

        if (existingTicket) {
          throw new Error('Seat is not available');
        }

        const [newId] = await trx(this.table).insert(data).returning('id');

        return newId;
      },
      { isolationLevel: 'serializable' }
    );

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
