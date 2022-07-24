import {Request, Response} from "express";

export interface CryptoAPIControllerInterface {
    rate: (req: Request, res: Response) => Promise<void>
}