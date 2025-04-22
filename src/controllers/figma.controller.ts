import { Request, Response } from 'express';
import { createFigmaFrame } from '../services/figma.service';
import logger from '../utils/logger';
import { handleError } from '../utils/handleError';

export const createFigmaFrameHandler = async (req: Request, res: Response): Promise<void> => {
    const { name, width, height } = req.body;
    logger.info(`[Controller] 프레임 생성 요청 수신 - name: ${name}, size: ${width}x${height}`);

    try {
        const result = await createFigmaFrame(name, width, height);
        logger.info(`[Controller] 프레임 생성 완료 - name: ${name}`);
        res.json({ success: true, data: result });
    } catch (error) {
        handleError(res, error, 'Controller');
    }
};
