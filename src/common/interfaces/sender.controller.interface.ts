import { Request, Response } from "express";

export interface SenderControllerInterface {
  sendEmails: (req: Request, res: Response) => Promise<void>;
}
