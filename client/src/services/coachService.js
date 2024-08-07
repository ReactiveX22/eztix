import { api, endPoints } from './apiService';

class CoachService {
  fetchCoachesByRoute = async (id) => {
    try {
      const data = (await api.get(endPoints.coaches.byRouteId(id))).data;
      return data;
    } catch (error) {
      throw new Error('Error fetching routes!');
    }
  };
}

export default new CoachService();
