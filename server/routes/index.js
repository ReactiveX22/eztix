import express from "express";
import customerController from "../controller/customer.js";
import path from "path";

console.log(path.resolve("../service/customer"));
const router = express.Router();

router.post("/customer", customerController.createCustomer);
router.delete("/customer", customerController.deleteCustomer);

export default router;
