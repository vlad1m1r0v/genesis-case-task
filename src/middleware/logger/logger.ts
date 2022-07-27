import {Request, Response, NextFunction} from "express";

const logger = function (req: Request, res: Response, next: NextFunction) {
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT;
    const fullUrl = `${protocol}://${host}:${port}${url}`
    console.log(`[logger]: DATE: ${new Date().toLocaleTimeString()} URL: ${fullUrl}`)
    next();
};

export default logger;