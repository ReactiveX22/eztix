import db from '../db/db.js';

class CoachDAO {
  table = 'coach';

  async createCoach(data) {
    const [id] = await db(this.table)
      .insert(data)
      .returning('id');

    return id;
  }

  async deleteCoach(id) {
    const deletedRows = await db(this.table).where('id', id).del();
    return deletedRows;
  }

  async getCoachById(id) {
    const coach = await db(this.table).where('id', id).select();
    return coach;
  }

  async getAllCoachs() {
    const coachs = await db(this.table).select();
    return coachs;
  }

  async updateCoach(id, data) {
    const updatedRows = await db(this.table).where('id', id).update(data);
    return updatedRows;
  }
}

export default new CoachDAO();