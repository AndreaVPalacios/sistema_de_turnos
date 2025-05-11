import { Router, RouterOptions } from "express";
import {
  createUser,
  getUserID,
  getUsers,
  loginUser,
} from "../controllers/indexControllers";
import {  userMiddleware } from "../middlewares/userMiddleware";
import auth from "../middlewares/auth";

const usersRouter: Router = Router();

//RUTAS DE USUARIOS
usersRouter.get("/",  getUsers);
usersRouter.get("/:id", getUserID);
usersRouter.post("/register", userMiddleware, createUser);
usersRouter.post("/login", loginUser);

export default usersRouter;
