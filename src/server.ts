import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import { logger } from "@/logger";
import { routes } from "@/routes";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || "3000");

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Api routes
app.get("/health", (req: Request, res: Response) => {
  res.status(200);
  res.send({healthCheck: "OK"})
})
app.use("/api", routes);

// Gestion des routes inconnues
app.use((req: Request, res: Response) => {
  logger.warn("Route not found");
  res.status(404);
  res.send("Route not found");
});

app.listen(PORT, () => logger.info(`Server is running on PORT ${PORT}`));
