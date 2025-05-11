import { AppDataSource } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { AppointmentStatus } from "../enum/AppointmentStatus";

const AppointmentEntity = AppDataSource.getRepository(Appointment)

export const getAllAppointmentService = async (): Promise<Appointment[]> => {
    const appointmentsAll: Appointment[] = await AppointmentEntity.find({
        relations: { user:true },
        order: { id:"DESC" }
    });
    return appointmentsAll
};

export const getAppointmentByIDService = async (id:number): Promise<Appointment|null> => {
    const foundApp = await AppointmentEntity.findOne({
        where: {id},
        relations: ["user"],
    })
    return foundApp
};

export const scheduleAppointmentService = async (appointmentData:AppointmentDto): Promise<Appointment|null> => {
    const {date, time, description, userId} = appointmentData;
    const foundUser = await AppDataSource.getRepository(User).findOneBy({id:userId})
    if(foundUser){
        const newAppointment:Appointment = AppointmentEntity.create({
            date,
            time,
            user:foundUser
        })
        await AppointmentEntity.save(newAppointment);
        return newAppointment
    }
    return null
}

export const cancelAppointmentService = async (id:number): Promise<string> => {
    const foundApp: Appointment | null = await AppointmentEntity.findOneBy({id})
    if(foundApp){
        foundApp.status = AppointmentStatus.CANCELLED;
        AppointmentEntity.save(foundApp)
    }

    if(foundApp) return "Turno exitosamente cancelado"
    else return "El id del turno no existe";
}