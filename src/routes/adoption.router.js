import { Router } from 'express';
import adoptionsController from '../controllers/adoption.controller.js';

const router = Router();

router.get('/', adoptionsController.getAllAdoptions);
router.get('/:aid', adoptionsController.getAdoption);
router.post('/:uid/:pid', adoptionsController.createAdoption);

export default router;