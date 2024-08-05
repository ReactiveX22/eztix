import express from 'express';
import customerController from '../controller/customerController.js';

const router = express.Router();

router.post('/', customerController.createCustomer);

router.get('/', customerController.getAllCustomers);

router.get('/:id', customerController.getCustomerById);

router.delete('/:id', customerController.deleteCustomer);

router.patch('/:id', customerController.updateCustomer);

export default router;
