import { Router } from "express";
import { usersRoutes } from "@/routes/users";

export const routes: Router = Router();

routes.use("/users", usersRoutes);
