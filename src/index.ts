import express from "express";
import { PORT } from "./configs/config";
import bootstrap from "./app";

const app = express();

bootstrap(app);

app.listen(PORT, async () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
