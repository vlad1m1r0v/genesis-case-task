import express, {Request, Response} from 'express';
import * as dotenv from "dotenv";
import path from 'path';

dotenv.config({path: path.join(__dirname, '..', 'src', 'configs', '.env')});

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});