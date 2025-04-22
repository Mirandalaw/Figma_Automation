import { callFigmaApi } from '../utils/figmaClient';
import logger from '../utils/logger';

export const createFigmaFrame = async (name: string, width: number, height: number) => {
    logger.info(`[Service] Figma 프레임 생성 시작 - name: ${name}`);
    try {
        const response = await callFigmaApi(name, width, height);
        logger.info(`[Service] Figma 프레임 생성 성공`);
        return response;
    } catch (error) {
        logger.error(`[Service] Figma API 호출 실패 - ${(error as Error).message}`);
        throw error;
    }
};