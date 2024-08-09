import routeService from '../service/routeService.js';

class RouteController {
  async createRoute(req, res) {
    try {
      const route = await routeService.createRoute(req.body);
      res.status(201).json(route);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

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
