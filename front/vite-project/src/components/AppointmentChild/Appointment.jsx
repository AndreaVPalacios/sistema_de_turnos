
import '../AppointmentChild/Appointments.components.css'


const Appointment = ({ id, date, time, description, status, nDni, cancelAppointment }) => {

  const canCancelAppointment = (appointmentDate) => {
    const today = new Date().toISOString().split("T")[0]; // Fecha actual en formato 'YYYY-MM-DD'
    return appointmentDate > today; // Solo se puede cancelar si la fecha es mayor que hoy
  };

  const isCancelable = canCancelAppointment(date);

    return (
      <table className="container">
        <p>Fecha: {date}</p>
        <p>Hora: {time}</p>
        <p>Turno Agendado{description}</p>
        <p className={`status ${status === 'active' ? 'active' : 'cancel'}`}>{status}</p>
        {status === "active" && isCancelable ? (
        <button onClick={() => cancelAppointment(id)}>Cancelar</button>
      ) : (
        <p className="textCancelled">{isCancelable ? "Turno cancelado" : "No se puede cancelar este turno"}</p>
      )}
      </table>
    );
  };
  
  export default Appointment;
  
