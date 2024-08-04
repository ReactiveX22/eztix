import express from 'express';
import customerController from '../controller/customerController.js';

const router = express.Router();

router.post('/', customerController.createCustomer);

router.get('/:id', customerController.getCustomerById);

router.delete('/:id', customerController.deleteCustomer);

export default router;
