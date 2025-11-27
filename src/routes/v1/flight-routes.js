const express = require('express');
const { FlightController } = require('../../controllers')
const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/flights POST
router.post('/', 
        FlightMiddlewares.validateCreateRequest,
        FlightController.createFlight);

// /api/v1/flights GET
router.get('/', FlightController.getAllFlights);

//get single flight
// /api/v1/flights/:id GET
router.get('/:id', FlightController.getFlight);

//Update seats /api/v1/flights/:id/seats
router.patch('/:id/seats', FlightController.updateSeats);

module.exports = router;