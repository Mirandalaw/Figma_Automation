import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import {createFigmaFrameHandler} from '../controllers/figma.controller';
import {verifyApiKey} from "../middlewares/verifyApiKey";

const router = Router();

router.post('/create-frame', asyncHandler(createFigmaFrameHandler));

export default router;