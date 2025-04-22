import {Request, Response, NextFunction} from "express";

export const verifyApiKey = (req: Request, res: Response, next: NextFunction) => {
    const key = req.headers['x-api-key'];
    if (key !== process.env.API_SECRET) {
        return res.status(403).json({message: 'Forbidden: Invalid API Key'});
    }
    next();
};
