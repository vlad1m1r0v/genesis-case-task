import express, { Request, Response } from "express";
import multer from "multer";
import cors from "cors";
import { PORT } from "./configs/config";
import emailsController from "./controllers/emails";
import cryptoAPIController from "./controllers/cryptoAPI";

const app = express();

app.use(cors());
app.use(express.json());

app.post(
  "/subscribe",
  multer().none(),
  async (req: Request, res: Response) =>
    await emailsController.subscribe(req, res)
);
app.get(
  "/rate",
  async (req: Request, res: Response) =>
    await cryptoAPIController.rate(req, res)
);

app.listen(PORT, async () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
