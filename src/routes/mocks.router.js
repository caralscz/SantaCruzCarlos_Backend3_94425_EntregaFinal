// -----------------------------------------------------------
// src/routes/mocks.router.js
// desde app.js  : app.use('/api/mocks',mocksRouter); 
// -----------------------------------------------------------

import { Router } from 'express';
import mocksController from '../controllers/mocking.controller.js';

const router = Router();

router.get('/mockingpets', mocksController.pet);
router.get('/mockingusers',mocksController.user);
router.post('/generateData',mocksController.generateData);

export default router;

