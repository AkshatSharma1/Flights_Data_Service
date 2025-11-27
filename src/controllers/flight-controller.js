const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { SuccessReponse, ErrorResponse } = require("../utils/common");


async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            boardingGate: req.body.boardingGate,
            price: req.body.price
        })

        SuccessReponse.data = flight;
        return res.status(StatusCodes.CREATED).json(SuccessReponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessReponse.data = flights;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

//get single flight data
async function getFlight(req, res){
    try {
        const flight = await FlightService.getFlight(req.params.id);
        SuccessReponse.data = flight;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

//Update seats after booking
async function updateSeats(req, res) {
    try {
        const response = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            dec: req.body.dec
        });
        SuccessReponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}
