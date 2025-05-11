import { Router } from "express";
import router from "./indexRoutes";
import { cancelAppointment, getAllAppointments, getAppointmentByID, registerNewAppointment } from "../controllers/appointmentsControllers";

const appointmentRouter:Router = Router()

//RUTAS DE TURNOS = APPOINTMENTS
appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointmentByID);
appointmentRouter.post("/schedule", registerNewAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);

export default appointmentRouter
