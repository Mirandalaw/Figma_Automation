import axios from 'axios';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

const token = process.env.FIGMA_API_TOKEN;
const fileId = process.env.FIGMA_FILE_ID;

export const callFigmaApi = async (name: string, width: number, height: number) => {
    logger.info(`[FigmaAPI] 호출 시작 - 프레임: ${name}`);

    const headers = {
        'X-Figma-Token': token,
        'Content-Type': 'application/json',
    };

    const commentBody = {
        message: `📐 GPT 자동 생성 요청\n- 이름: ${name}\n- 크기: ${width}x${height}`,
        client_meta: {
            x: 100,
            y: 100
        }
    };

    try {
        const url = `https://api.figma.com/v1/files/${fileId}/comments`;
        const response = await axios.post(url, commentBody, { headers });

        logger.info(`[FigmaAPI] 주석 생성 완료 - ${name}`);
        return response.data;
    } catch (error: any) {
        logger.error(`[FigmaAPI] 호출 실패 - ${error.message}`);
        throw error;
    }
};
