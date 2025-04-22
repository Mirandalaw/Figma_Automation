import { Response } from 'express';
import logger from './logger';

export const handleError = (res: Response, error: unknown, location = 'Unknown') => {
    const message = (error as Error).message || 'Unknown error';
    logger.error(`[${location}] ${message}`);
    return res.status(500).json({ success: false, message });
};