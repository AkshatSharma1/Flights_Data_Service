const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessReponse, ErrorResponse } = require('../utils/common');

/**
 * POST /cities
 * req.body.name -> 'London'
 */
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessReponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * DELETE /cities/:id
 */
async function destroyCity(req, res) {
    try {
        const response = await CityService.destroyCity(req.params.id);
        SuccessReponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * PATCH /cities/:id
 * req.body.name -> 'New City Name'
 */
async function updateCity(req, res) {
    try {
        const response = await CityService.updateCity(req.params.id, req.body);
        SuccessReponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

//Get city
async function getCity(req, res){
    try {
        const city = await CityService.getCity(req.params.id);
        SuccessReponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

//Get Cities
async function getCities(req, res) {
    try {
        const cities = await CityService.getCities();
        SuccessReponse.data = cities;
        return res.status(StatusCodes.OK).json(SuccessReponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    destroyCity,
    updateCity,
    getCity,
    getCities
}