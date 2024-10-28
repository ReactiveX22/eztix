import express from "express";
import TicketController from "../controller/ticketController.js";

const router = express.Router();

router.post("/", TicketController.createTicket);
router.get("/", TicketController.getAllTickets);
router.get("/:id", TicketController.getTicketById);
router.delete("/:id", TicketController.deleteTicket);
router.patch("/:id", TicketController.updateTicket);
router.get("/user-tickets/:customerId", TicketController.getUserTickets);

router.get(
  "/coaches/:coach_id/seats",
  TicketController.getSeatNumbersByCoachId
);

export default router;
