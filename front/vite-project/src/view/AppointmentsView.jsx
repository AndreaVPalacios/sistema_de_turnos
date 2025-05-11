import Appointments from "../components/AppointmentParent/Appointments"
import ScheduleForm from "../components/MyAppointments/CreateTurn"
import ScheduleView from "./ScheduleView"

const AppointmentsView = () => {
    return (
        <div>
        <Appointments/>
        <ScheduleForm />
        </div>
    )
}

export default AppointmentsView
