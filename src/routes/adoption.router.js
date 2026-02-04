// -----------------------------------------------------------
// src/routes/adoption.router.js
// desde app.js  : app.use('/api/adoptions',adoptionsRouter); 
// -----------------------------------------------------------

import { Router} from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';

const router = Router();

router.get('/',adoptionsController.getAllAdoptions);
router.get('/:aid',adoptionsController.getAdoption);
router.post('/:uid/:pid',adoptionsController.createAdoption);

export default router;