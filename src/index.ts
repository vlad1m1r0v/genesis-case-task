import express, {Request, Response} from 'express';
import cors from 'cors';
import * as dotenv from "dotenv";
import path from 'path';
import emailsController from "./controllers/emails";

dotenv.config({path: path.join(__dirname, '..', 'src', 'configs', '.env')});

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(express.json())

app.post('/subscribe', async (req: Request, res: Response) => await emailsController.subscribe(req, res))

app.listen(PORT, async () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});