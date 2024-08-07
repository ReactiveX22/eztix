import db from '../db/db.js';

class CoachDAO {
  table = 'coach';

  async createCoach(data) {
    const [id] = await db(this.table).insert(data).returning('id');

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
    const coaches = await db(this.table).select();
    return coaches;
  }

  async updateCoach(id, data) {
    const updatedRows = await db(this.table).where('id', id).update(data);
    return updatedRows;
  }

  async getCoachesByRouteId(id) {
    const coaches = await db(this.table).where('route_id', id).select();
    return coaches;
  }
}

export default new CoachDAO();
