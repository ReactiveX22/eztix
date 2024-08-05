import { api, endPoints } from './apiService';

class RouteService {
  fetchRoutes = async () => {
    try {
      const response = await api.get(endPoints.routes);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching routes!');
    }
  };
}

export default new RouteService();
