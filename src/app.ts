import express, { Express, Request, Response } from "express";
import cors from "cors";
import cryptoAPIController from "./controllers/cryptoAPI";
import multer from "multer";
import emailsController from "./controllers/emails";
import senderController from "./controllers/sender";

const bootstrap = (app: Express) => {
  app.use(cors());
  app.use(express.json());

  app.get(
    "/rate",
    async (req: Request, res: Response) =>
      await cryptoAPIController.rate(req, res)
  );

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

  app.post(
    "/sendEmails",
    async (req: Request, res: Response) =>
      await senderController.sendEmails(req, res)
  );
};

export default bootstrap;
