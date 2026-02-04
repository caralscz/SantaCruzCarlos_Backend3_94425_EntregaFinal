// --------------------------------------------------------------------
// src/controllers/mocking.controller.js
// --------------------------------------------------------------------

import generatePetsMocks from '../mocks/pets.mocks.js';
import generateUsersMocks from '../mocks/users.mocks.js';
import { usersService, petsService } from '../services/index.js';

// valida que n campos pasados sean numéricos, enteros y mayores a 0
const validatePositiveInteger = (...values) =>
    values.every(v => Number.isInteger(v) && v > 0);

class mocksController {

    // GET /api/mocks/mockingpets
    static pet = (req, res) => {
        try {
            const pets = generatePetsMocks(100);
            return res.status(200).json({ 
                status: 'success', 
                payload: pets });
        } catch (err) {
            res.status(500).json({ 
                error: 'Internal server error.' });
        }
    }

    // GET /api/mocks/mockingusers
    static user = async (req, res) => {
        try {
            const users = await generateUsersMocks(50);
            return res.status(200).json({ 
                status: 'success', 
                payload: users });
        } catch (err) {
            res.status(500).json({ 
                error: 'Internal server error. ' });
        }
    }

    // POST /api/mocks/generateData
    static generateData = async (req, res) => {
        const { users, pets } = req.body;

        const cantUser = Number(users);
        const cantPet = Number(pets);

        if (!validatePositiveInteger(cantUser, cantPet)) {
            return res.status(400).json({
                message: 'users y pets deben ser números enteros mayores a 0'
            });
        }

        try {
            const mocksUsers = await generateUsersMocks(cantUser);
            const mocksPets = generatePetsMocks(cantPet);

            await usersService.create(mocksUsers);
            await petsService.create(mocksPets);

            return res.status(200).json({
                status: 'success',
                inserted: { users: cantUser, pets: cantPet }
            });

        } catch (err) {
            return res.status(500).json({
                error: 'Internal server error. '
            });
        }
    };

}

export default mocksController;