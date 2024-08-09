import express from 'express';
import routeController from '../controller/routeController.js';

const router = express.Router();

router.get('/', routeController.getAllRoutes);
router.post('/', routeController.createRoute);

export default router;
