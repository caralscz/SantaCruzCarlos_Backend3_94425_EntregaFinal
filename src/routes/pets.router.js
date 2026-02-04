// -----------------------------------------------------------
// src/routes/pets.router.js
// desde app.js  : app.use('/api/pets',petsRouter); 
// -----------------------------------------------------------

import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         species:
 *           type: string
 *         age:
 *           type: number
 */

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtener mascotas
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de mascotas
 */
router.get('/',petsController.getAllPets);


/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Crear mascota
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Pet"
 *     responses:
 *       201:
 *         description: Mascota creada
 */
router.post('/',petsController.createPet);
router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid',petsController.updatePet);
router.delete('/:pid',petsController.deletePet);

export default router;