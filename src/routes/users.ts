import { Router, Request, Response } from "express";
import { logger } from "@/logger";

export const usersRoutes = Router();

usersRoutes.get("/", (req: Request, res: Response) => {
  logger.info("Je suis dans la route /users");
  res.send("Voici tous mes utilisateurs");
});
