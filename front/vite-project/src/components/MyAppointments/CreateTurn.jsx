import React, { useContext, useEffect, useState } from 'react';

import '../MyAppointments/styles.css'
import { userUserContext } from '../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HOME, PROFILE, TURN_SUCCESS } from '../../helpers/routes';

const ScheduleTurnForm = () => {
  const navigate = useNavigate();
  const { userActive, setUserAppointments } = userUserContext();

  const [formData, setFormData] = useState({
    Date: '',
    time: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const validateTurn = () => {
    const newErrors = {};

    if (!formData.Date) {
      newErrors.Date = "Selecciona un día de Lunes a Viernes";
    } else {
      const selectedDate = new Date(formData.Date).getUTCDay();
      // Días 0-6, 0 es Domingo 6 es Sábado
      if (selectedDate == 0 || selectedDate == 6) {
        alert('¡Solo puedes agendar de Lunes a Viernes!')
        newErrors.Date = "No se pueden agendar turnos los fines de semana";
      }
    }

    if (!formData.description) newErrors.description = "Descripción Obligatoria";
    if (!formData.time) newErrors.time = "Selecciona la hora";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour <= 15; hour++) {
      times.push(`${hour < 10 ? '0' + hour : hour}:00`);
      if (hour < 15) times.push(`${hour < 10 ? '0' + hour : hour}:30`);
    }
    return times;
  };

  const postTurnSubmit = async () => {
    if (validateTurn()) {
      
      try {
        const response = await axios.post('http://localhost:3000/appointments/schedule', {
          date: formData.Date,
          time: formData.time,
          description: formData.description,
          userId: userActive.id,
        });

        // Actualiza los turnos del usuario activo con la respuesta
         setUserAppointments(response.data.appointments);

      //  alert("Turno agendado exitosamente");
        navigate(TURN_SUCCESS);
      } catch (error) {
        console.error("Error al agendar el turno:", error);
        alert("No se pudo agendar el turno. Intenta nuevamente.");
      }

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("userData");
    navigate(HOME);
  };

  return (
    <div className="schedule-container">
      <form
        className="schedule-form"
        onSubmit={(e) => {
          e.preventDefault();
          postTurnSubmit();
        }}
      >
        <h3>Agenda tu Cita</h3>
        <input
          type="text" 
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && (
          <span style={{ color: '#911414', fontSize: '12px', fontFamily: 'Bebas Neue' }}>
            {errors.description}
          </span>
        )}
        <input
          type="date"
          name="Date"
          value={formData.Date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
        />
        {/* <h5>Elije un día de Lunes a Viernes</h5> */}
        {errors.Date && (
          <span style={{ color: '#911414', fontSize: '12px', fontFamily: 'Bebas Neue' }}>
            {errors.Date}
          </span>
        )}
        <select name="time" value={formData.time} onChange={handleChange}>
          <option value="">Selecciona la hora</option>
          {generateTimeOptions().map((timeOption, index) => (
            <option key={index} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        {errors.time && (
          <span style={{ color: '#911414', fontSize: '12px', fontFamily: 'Bebas Neue' }}>
            {errors.time}
          </span>
        )}
        <button type="submit">Agendar</button>
      </form>

      <div className="button-container">
                <button className="profile-button" onClick={() => navigate(PROFILE)}>
                    Ir a mi perfil
                </button>
                <button className="logout-button" onClick={handleLogout}>
                    Cerrar Sesión
                </button>
            </div>
    </div>
  );
};

export default ScheduleTurnForm;
