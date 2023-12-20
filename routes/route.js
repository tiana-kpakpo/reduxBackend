import express from 'express';
import ticketController from '../controller/ticketController.js';

const router = express.Router();


// router.get('/api/tickets', ticketController.allTickets);

router.get('/api/tickets', ticketController.getTickets);

router.post('/api/ticket', ticketController.addTicket);

router.delete('/api/tickets/:id', ticketController.deleteTicket);

// router.put('api/update-ticket/:id', ticketController.updateTicket); 

router.put('/api/tickets/:id', ticketController.updateTicket);


export default router;