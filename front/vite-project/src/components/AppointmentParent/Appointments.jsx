import { useEffect, useState } from "react";
import allAppointments from "../../helpers/allAppointments";
import Appointment from "../AppointmentChild/Appointment";
import axios from  "axios";
import { UserContext, userUserContext } from "../context/UserContext";
import '../AppointmentChild/Appointments.components.css'
import { useNavigate } from "react-router-dom";
import { HOME, PROFILE, TURN_CANCELLED } from "../../helpers/routes";

const Appointments = () => {
    const navigate = useNavigate()
    const {userActive, userAppointments, setUserAppointments} = userUserContext();
    const [flag,  setFlag] = useState(false);

     

    useEffect(() => {
        const fethData = () => {
        axios
            .get(`http://localhost:3000/users/${userActive.id}`)
            .then(res => {
            setUserAppointments(res.data.appointments);
            })
            .catch(err => alert(err));
        }
        !userActive.name ? navigate(HOME) : fethData();
    },[userActive.id, flag]);

    const cancelAppointment = async (id) => {
        navigate(TURN_CANCELLED)
        await axios.put (`http://localhost:3000/appointments/cancel/${id}`);
        setFlag(!flag);
    };

    return (
        <div >

        <table className="user-table">
        
                <thead><th>Tus Turnos Agendados</th></thead>
        
        <tbody>
            {userAppointments?.length > 0 ? (userAppointments.map((app) => 
                 (
                    <Appointment key={app.id}
                    id={app.id}
                    date={app.date}
                    time={app.time}
                    status={app.status}
                    description={app.description}
                    cancelAppointment={cancelAppointment}/>
                    )
                )) : (
                <tr>
                    <td>Aun no has agendado tus turnos</td>
                </tr>
                )
            } 
            
        </tbody>    
        </table>

        </div>
    )
}


export default Appointments
