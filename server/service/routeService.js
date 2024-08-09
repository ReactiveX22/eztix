import routeDao from '../dao/routeDao.js';

class RouteService {
  createRoute(coachDto) {
    return routeDao.createRoute(coachDto);
  }

  getAllRoutes() {
    return routeDao.getAllRoutes();
  }
}

export default new RouteService();
