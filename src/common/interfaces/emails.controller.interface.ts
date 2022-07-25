import { EmailDto } from "../dtos/email.dto";
import { Request, Response } from "express";

export interface EmailsControllerInterface {
  subscribe: (req: Request, res: Response) => Promise<void>;
}
