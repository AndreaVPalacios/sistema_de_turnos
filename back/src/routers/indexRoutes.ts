import { Router } from "express";
import usersRouter from "./usersRouter";
import appointmentRouter from "./appointmentRoutes";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/appointments", appointmentRouter);

export default router;
