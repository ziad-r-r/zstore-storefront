import { createApp } from "./app.js";
import { logger } from "./lib/logger.js";

const port = Number(process.env.PORT) || 3000;
const app = createApp();

app.listen(port, "0.0.0.0", () => {
  logger.info(`API server listening on port ${port}`);
});
