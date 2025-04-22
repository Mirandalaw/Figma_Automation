import express from 'express';
import cors from 'cors';
import { requestLogger } from './middlewares/logger.middleware';
import figmaRouter from './routes/figma.route';

const app = express();
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());
app.use(requestLogger);
app.use('/figma', figmaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[✅] Local backend running on http://localhost:${PORT}`);
});