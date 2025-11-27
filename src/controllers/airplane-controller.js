const {StatusCodes} = require('http-status-codes')
const {AirplaneService} = require('../services');
const { SuccessReponse, ErrorResponse } = require('../utils/common');

//create airplane
async function createAirplane(req, res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        const response = {...SuccessReponse};
        response.data = airplane;

        return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
        const errorResponse = {...ErrorResponse};
        errorResponse.error = error //from service layer
        return res.status(error.statusCode).json(errorResponse) //use statusCode passed from AppError in service layer

    }
}

//get airplanes
async function getAirplanes(req, res){
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessReponse.data = airplanes;

        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET /airplanes/:id 
 * req.params.id contains the ID
 */
async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessReponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * PATCH /airplanes/:id
 * req.body contains the updates
 */
async function updateAirplane(req, res) {
    try {
        const response = await AirplaneService.updateAirplane(req.params.id, req.body);
        SuccessReponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * DELETE /airplanes/:id
 */
async function deleteAirplane(req, res) {
    try {
        const response = await AirplaneService.deleteAirplane(req.params.id);
        SuccessReponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    updateAirplane,
    deleteAirplane
}