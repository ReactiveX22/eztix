import express from 'express';
import CoachController from '../controller/coachController.js';

const router = express.Router();

router.post('/', CoachController.createCoach);
router.get('/', CoachController.getAllCoachs);
router.get('/:id', CoachController.getCoachById);
router.get('/route/:route_id', CoachController.getCoachesByRouteId);
router.delete('/:id', CoachController.deleteCoach);
router.patch('/:id', CoachController.updateCoach);

export default router;
