import { AppointmentStatus } from "../enum/AppointmentStatus";

interface IAppointment {
    id:number,
    date: Date,
    time: string,
    userId: number,
    status: AppointmentStatus
}

export default IAppointment
