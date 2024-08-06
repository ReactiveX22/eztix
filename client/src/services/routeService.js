import { api, endPoints } from './apiService';

class RouteService {
  fetchRoutes = async () => {
    try {
      const data = (await api.get(endPoints.routes)).data;
      return data;
    } catch (error) {
      throw new Error('Error fetching routes!');
    }
  };
}

export default new RouteService();
