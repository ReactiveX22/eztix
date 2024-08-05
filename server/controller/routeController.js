import routeService from '../service/routeService.js';

class RouteController {
  async getAllRoutes(req, res) {
    try {
      const allRoutes = await routeService.getAllRoutes();
      res.status(201).json(allRoutes);
    } catch (error) {
      res.status(500);
    }
  }
}

export default new RouteController();
