import {Request, Response, NextFunction} from 'express';
import logger from '../utils/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    const {method, url} = req;
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        const status = res.statusCode;
        logger.info(`[${method}] ${url} → ${status} (${duration}ms)`);
    });

    next();
};