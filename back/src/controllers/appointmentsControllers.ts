import { Response, Request, NextFunction } from "express"
import { cancelAppointmentService, getAllAppointmentService, getAppointmentByIDService, scheduleAppointmentService } from "../services/indexAppointServices"


export const getAllAppointments = async (req:Request, res:Response) => {
    try {
        const allAppointments = await getAllAppointmentService()
        return allAppointments.length?
        res.status(200).json(allAppointments)
        :res.status(404).json({
            message:"No hay turnos que mostrar"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Hubo un error en la app"
        })
    }
}

export const getAppointmentByID = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        const oneApp = await getAppointmentByIDService(Number(id))
        return oneApp
        ?res.status(200).json(oneApp):res.status(404).json({message: "Este turno no existe"})
    } catch (error) {
        return res.status(500).json({
            message:"Hubo un error en la app"
        })
    }
}

export const registerNewAppointment = async (req:Request, res:Response) => {
    try {
        const {date, time, description, userId} = req.body
        const newTurn = await scheduleAppointmentService({date, time, description, userId})
        res.status(200).json({
        message:"Turno creado exitosamente",
        newTurn
    })   
    } catch (error) {
        return res.status(400).json({
            message:"Los datos son incorrectos"
        })
    }
}

export const cancelAppointment = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;
    const result = await cancelAppointmentService(Number(id))
    return result 
        ?res.status(200).json({message:result}) :
        res.status(404).json({message: "No se pudo cancelar tu turno"})
    } catch (error) {
        return res.status(500).json({
            message:"Hubo un error en la app"
        })
    }
    
}