import CoachDAO from '../dao/CoachDao.js';

class CoachService {
  createCoach(coachDto) {
    return CoachDAO.createCoach(coachDto);
  }

  getAllCoachs() {
    return CoachDAO.getAllCoachs();
  }

  deleteCoach(coachDto) {
    return CoachDAO.deleteCoach(coachDto);
  }

  getCoachById(coachDto) {
    return CoachDAO.getCoachById(coachDto);
  }

  updateCoach(coachDto) {
    return CoachDAO.updateCoach(coachDto.id, coachDto.data);
  }

  getCoachesByRouteId(coachDto) {
    return CoachDAO.getCoachesByRouteId(coachDto);
  }
}

export default new CoachService();
