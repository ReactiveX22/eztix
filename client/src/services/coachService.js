import { api, endPoints } from './apiService';

class CoachService {
  createCoach = async (coach) => {
    try {
      const data = (await api.post(endPoints.coaches.all, coach)).data;
      return data;
    } catch (error) {
      throw new Error('Error creating coach!');
    }
  };

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
