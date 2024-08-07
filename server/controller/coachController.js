import CoachService from '../service/coachService.js';

class CoachController {
  async createCoach(req, res) {
    try {
      const id = await CoachService.createCoach(req.body);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllCoachs(req, res) {
    try {
      const allCoachs = await CoachService.getAllCoachs();
      res.status(200).json(allCoachs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCoachById(req, res) {
    try {
      const { id } = req.params;
      const coach = await CoachService.getCoachById(id);
      res.status(200).json(coach);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCoach(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await CoachService.deleteCoach(id);
      res.status(200).json({ deletedRows });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCoach(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedCoach = await CoachService.updateCoach({ id, data });
      res.status(200).json(updatedCoach);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCoachesByRouteId(req, res) {
    try {
      const { route_id } = req.params;
      const coaches = await CoachService.getCoachesByRouteId(route_id);
      res.status(200).json(coaches);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new CoachController();
