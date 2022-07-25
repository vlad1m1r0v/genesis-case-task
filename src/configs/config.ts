import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.join(__dirname, "..", "..", "src", "configs", ".env"),
});

export const PORT = process.env.PORT;
export const CRYPTOCURRENCY_API_KEY = process.env.CRYPTOCURRENCY_API_KEY;
