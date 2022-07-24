import express, {Request, Response} from 'express';
import cors from 'cors';
import * as dotenv from "dotenv";
import path from 'path';
import {PORT} from './configs/config';
import emailsController from "./controllers/emails";
import cryptoAPIController from "./controllers/cryptoAPI";

const app = express();

app.use(cors());
app.use(express.json());

app.post('/subscribe', async (req: Request, res: Response) => await emailsController.subscribe(req, res));
app.get('/rate', async (req: Request, res: Response) => await cryptoAPIController.rate(req, res));

app.listen(PORT, async () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});