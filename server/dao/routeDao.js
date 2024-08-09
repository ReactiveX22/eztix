import db from '../db/db.js';

class RouteDao {
  table = 'route';

  async createRoute(data) {
    const route = await db(this.table).insert(data).returning('*');
    return route;
  }

  async getAllRoutes() {
    const allRoutes = await db(this.table).select();
    return allRoutes;
  }
}

export default new RouteDao();
