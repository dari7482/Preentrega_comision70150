import { Router } from "express";
import petMockController from '../controllers/petMock.controller.js'


const router = Router()

router.get('/mokingpets/:quantity', petMockController.getALLpet)

export default router;