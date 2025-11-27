const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories")

const airplaneRepository = new AirplaneRepository();
const AppError = require('../utils/errors/app-error');

//Create plane business logic
async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data)
        return airplane;
    }
    catch(error){
        //check if its sequelize error
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanations = [];
            error.errors.forEach(err => {
                explanations.push(err.message);                
            });

            throw new AppError(explanations, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create an airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//get all airplanes
async function getAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch data of the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//get Airplane by id logic
async function getAirplane(id){
    try {
        const airplane = await airplaneRepository.get(id);
        if(!airplane){
            throw new AppError('The requested airplane is not found', StatusCodes.NOT_FOUND)
        }

        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw error
        }

        throw new AppError('Cannot fetch data of the requested airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//update airplane data by id
async function updateAirplane(id, data){
    try {
        const response = await airplaneRepository.update(id, data);
        //updation returns an array of rows affected. If count = 0 means no changes
        if(response[0]==0){
            throw new AppError('The airplane requested to update is not found', StatusCodes.NOT_FOUND)
        }

        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw error;
        }

        throw new AppError('Cannot update the airplane data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//destroy airplane by id: we are getting using primary key(its id here)
async function deleteAirplane(id){
    try {
        const response = await airplaneRepository.destroy(id);
        if(!response){
            throw new AppError('The airplane requested to delete is not found', StatusCodes.NOT_FOUND);
        }

        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw error;
        }

        throw new AppError('Cannot destroy the airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    updateAirplane,
    deleteAirplane
}