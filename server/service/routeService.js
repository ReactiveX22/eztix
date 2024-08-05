import routeDao from '../dao/routeDao.js';

class RouteService {
  getAllRoutes() {
    return routeDao.getAllRoutes();
  }
}

export default new RouteService();
