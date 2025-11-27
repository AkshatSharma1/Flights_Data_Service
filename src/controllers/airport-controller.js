const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const { SuccessReponse, ErrorResponse } = require('../utils/common');

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            cityId: req.body.cityId,
            address: req.body.address
        });
        SuccessReponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessReponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessReponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessReponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirport(req, res) {
    try {
        const response = await AirportService.updateAirport(req.params.id, req.body);
        SuccessReponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}