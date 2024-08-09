import { api, endPoints } from './apiService';

class RouteService {
  createRoute = async (route) => {
    try {
      const data = (await api.post(endPoints.routes.all, route)).data;
      return data;
    } catch (error) {
      throw new Error('Error creating coach!');
    }
  };

  fetchRoutes = async () => {
    try {
      const data = (await api.get(endPoints.routes.all)).data;
      return data;
    } catch (error) {
      throw new Error('Error fetching routes!');
    }
  };
}

export default new RouteService();
